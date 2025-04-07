import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const obtenerYActualizarContador = async (contadorSolicitado) => {
    try {
        const docRef = doc(db, "contadores", contadorSolicitado);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const nuevoValor = (data.contador || 0) + 1;

            await updateDoc(docRef, {
                contador: nuevoValor,
            });

            return nuevoValor; 
        } else {
            console.warn("No existe el documento solicitado");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener o actualizar el contador:", error);
        throw error;
    }
};

