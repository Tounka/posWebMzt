import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { Timestamp } from "firebase/firestore";

export const aperturarCaja = async(cajaSeleccionada, usuario) =>{
    const referencia = doc(db, "cajas",cajaSeleccionada );
    try{
        
        await updateDoc(referencia, {
            aperturada: true,
            fecha: Timestamp.fromDate(new Date()),
            tickets: [],
            usuarioRegistrado: usuario,
        });
    }catch(error){
        alert("Error al aperturar la caja")
    }
}
export const cerrarCaja = async(cajaSeleccionada, usuario) =>{
    const referencia = doc(db, "cajas",String(cajaSeleccionada) );
    try{
        
        await updateDoc(referencia, {
            aperturada: false,
            fecha: Timestamp.fromDate(new Date()),
            tickets: [],
            usuarioRegistrado: "",
        });
    }catch(error){
        alert("Error al aperturar la caja")
    }
}

export const obtenerCaja = async (cajaSeleccionada) => {
    const referencia = doc(db, "cajas", String(cajaSeleccionada));
    try {
      const doc = await getDoc(referencia);
      if (doc.exists()) {

        return {
          id: doc.id,
          ...doc.data(),
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