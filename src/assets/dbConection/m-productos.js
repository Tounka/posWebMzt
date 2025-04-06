import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebase";
import { capitalizarNombres } from "../Fn/utilidades/herramientas";

export const obtenerProductos = async () => {
    try {
        const q = query(collection(db, "productos"));
        const querySnapshot = await getDocs(q); 
        
        const productosData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        
        return productosData; 
    } catch (err) {
        console.error("Error al obtener categorías:", err);
        throw err;
    } 
};

export const subirProducto = async (values) =>{
    const referencia = doc(collection(db, "productos")); 

    try{
        await addDoc(referencia, {
            nombre: capitalizarNombres(values.nombre),
            descripcion: values.descripcion,
            marca: values.marca,
            costo: values.costo,
            precio: values.precio,
            categoria: values.categoria,
            subCategoria: values.subCategoria,
            icono: values.icono,
        });
      
   
    } catch (error) {
        return(error)
      
    } 
}