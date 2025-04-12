import { arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { Timestamp } from "firebase/firestore";

export const aperturarCaja = async (cajaSeleccionada, usuario) => {
  const referencia = doc(db, "cajas", cajaSeleccionada);
  try {

    await updateDoc(referencia, {
      aperturada: true,
      fecha: Timestamp.fromDate(new Date()),
      tickets: [],
      usuarioRegistrado: usuario,
    });
  } catch (error) {
    alert("Error al aperturar la caja")
    console.log(error)
  }
}
export const cerrarCaja = async (cajaSeleccionada) => {
  const referencia = doc(db, "cajas", String(cajaSeleccionada));
  const diaRef = doc(db, "dias", "diaEnOperacion" );
  let numeroDeTickets = 0;
  let sumaDescuento = 0;
  let sumaTotal = 0;
  let sumatotalProductos = 0
  //agregar numeor de productos
  try {
    const cajaSeleccionadadb = await obtenerCaja(cajaSeleccionada);
    cajaSeleccionadadb.tickets.forEach(ticket => {
      numeroDeTickets += 1;
      sumaDescuento = sumaDescuento + Number(ticket.descuento);
      sumaTotal = sumaTotal + Number(ticket.total)
      sumatotalProductos = sumatotalProductos + ticket.productos.length;
    });



    //enviar resumen de venta como [turno]

    await updateDoc(diaRef,{
      turnos: arrayUnion({
        cajaId: cajaSeleccionada,
        totalTickets: numeroDeTickets,
        totalDescuentos: sumaDescuento,
        totalVentas: sumaTotal,
        totalProductos: sumatotalProductos,
        fechaCierre: Timestamp.fromDate(new Date())
      })})
    await updateDoc(referencia, {
      aperturada: false,
      fecha: Timestamp.fromDate(new Date()),
      tickets: [],
      usuarioRegistrado: "",
    });
  } catch (error) {
    alert("Error al cerrar la caja")
    console.log(error)
  }
}

export const obtenerCaja = async (cajaId) => {
  const referencia = doc(db, "cajas", String(cajaId));
  try {
    const documento = await getDoc(referencia);
    if (documento.exists()) {
      return {
        ...documento.data(),
        id: documento.id,
      };
    } else {
      console.log("No existe la caja con ese ID");
      return null;
    }
  } catch (error) {
    console.log("Error al obtener la caja:", error);
    return null;
  }
};

export const obtenerTodasLasCajas = async () => {
  try {
    const coleccionRef = collection(db, "cajas");
    const snapshot = await getDocs(coleccionRef);

    const cajas = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      ref: doc.ref, // opcional
    }));

    return cajas;
  } catch (error) {
    console.error("Error al obtener todas las cajas:", error);
    return [];
  }
};