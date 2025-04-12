import { doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore"
import { convertirDiaIdFecha, convertirTimestampAMazatlan } from "../Fn/ObtenerFechaHora";
import { db } from "./firebase";

export const obtenerDiaEnOperacion = async () => {
    try {
        const diaRef = doc(db, "dias", "diaEnOperacion");
        const diaSnapshot = await getDoc(diaRef);

        if (!diaSnapshot.exists()) {
            console.log("No existe la información del día en operación");
            return null;
        }

        const data = diaSnapshot.data();
        console.log(data.fecha);

        const diaTratado = {
            ...data,
            fecha: data.fecha.toDate(),
        };
        console.log(diaTratado)
        return diaTratado;
    } catch (error) {
        console.error(error);
    }
};



export const aperturarDia = async () => {
    const diaEnOperacion = await obtenerDiaEnOperacion();
    const diaRef = doc(db, "dias", "diaEnOperacion");
    if (diaEnOperacion.aperturado === true) {
        return ("No es posible aperturar el dia pues ya esta aperturado")
    } else {
        try {
            const diaHoy = new Date();
            await updateDoc(diaRef, {
                diaAbierto: true,
                fecha: Timestamp.fromDate(diaHoy),
                tickets: [],
                diaId: convertirDiaIdFecha(diaHoy),
            })
        } catch (error) {
            alert("Problema al aperturar el dia, trate nuevamente")
        }
    }
}

export const cerrarDia = async () => {
    const diaEnOperacion = await obtenerDiaEnOperacion();
    const diaRef = doc(db, "dias", "diaEnOperacion");

    
    const nuevoDiaRef = doc(db, "dias", diaEnOperacion.diaId);
    if (diaEnOperacion.diaAbierto === true) {

        try {
            await updateDoc(diaRef, {
                diaAbierto: false,
            })
            let resumenTotalVenta = 0;
            let resumenTotalTickets = 0;
            let resumenTotalProductos = 0;
            let resumenTotalDescuentos = 0;

            diaEnOperacion?.turnos.forEach(turno => {
                resumenTotalVenta = resumenTotalVenta + turno.totalVentas;
                resumenTotalTickets = resumenTotalTickets +   turno.totalTickets;
                resumenTotalProductos = resumenTotalProductos + turno.totalProductos;
                resumenTotalDescuentos = resumenTotalDescuentos +    turno.totalDescuentos;
            });
            await setDoc(nuevoDiaRef,{
                resumenTurnos: {
                    totalVentas: resumenTotalVenta,
                    totalTickets: resumenTotalTickets,
                    totalProductos: resumenTotalProductos,
                    totalDescuentos: resumenTotalDescuentos,
                },
                turnos: diaEnOperacion.turnos,
                fechaCierre: Timestamp.now(),
            })
        return ({
            ...diaEnOperacion,
            diaAbierto: false,
        })
        } catch (error) {
            alert("Problema al aperturar el dia, trate nuevamente")
        }
        
    } 
}