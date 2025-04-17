import { collection, addDoc, query, orderBy, limit, getDocs } from "firebase/firestore"; 
import { db } from "./firebase";
import { convertirTimestampAMazatlan } from "../Fn/ObtenerFechaHora";

export const subirInventario = async (inventario) => {
    const ref = collection(db, "inventarios");
    try {
        const docRef = await addDoc(ref, {
            ...inventario
        });
        console.log("Inventario subido con éxito:", docRef.id); 
        return docRef.id; 
    } catch (error) {
        console.error("Error al subir el inventario:", error);
        throw error; 
    }
};


export const obtenerInventarios = async () => {
    const ref = collection(db, "inventarios");
    const q = query(ref, orderBy("fecha", "desc"), limit(5));

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const inventarios = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    ...data,
                    fecha: convertirTimestampAMazatlan(data.fecha).objetoDate,
                };
            });
            console.log(inventarios)
            return inventarios;
        } else {
            console.log("No hay inventarios.");
            return [];
        }
    } catch (error) {
        console.log("Error al obtener los inventarios:", error);
        return [];
    }
};
