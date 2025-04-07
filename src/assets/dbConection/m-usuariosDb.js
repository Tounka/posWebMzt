import { collection, getDocs, query, orderBy,updateDoc, doc  } from "firebase/firestore";
import { db } from "./firebase";
import { convertirTimestampAMazatlan } from "../Fn/ObtenerFechaHora";

export const ObtenerUsuarios = async () => {
    try {
        const q = query(collection(db, "usuarios"), orderBy("rol", "desc"));
        const querySnapshot = await getDocs(q); 
        console.log(querySnapshot)
        const usuariosData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            fechaCreacion: convertirTimestampAMazatlan( doc.data().fechaCreacion).fecha,
        }));
        
        return usuariosData; 
    } catch (err) {
        console.error("Error al obtener usuarios:", err);
        throw err;
    } 
};

export const modificarUsario = async (id, nuevosDatos, setIsSubmitting, onSuccess) => {
    try {
        const referencia = doc(db, "usuarios", id); 
        await updateDoc(referencia, nuevosDatos);
        alert("Se actualizó el usuario");
        onSuccess();
    } catch (error) {
        alert("Error al actualizar el usuario");
        console.log(error);
    } finally {
        setIsSubmitting(false); 
    }
}