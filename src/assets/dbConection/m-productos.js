import { addDoc, collection, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { capitalizarNombres } from "../Fn/utilidades/herramientas";
import { obtenerYActualizarContador } from "./m-contadores";
import { productos } from "../Contextos/dataDesarollo";

export const obtenerProductos = async () => {
    try {
        console.log("hola")
        const q = query(collection(db, "productos"));
        const querySnapshot = await getDocs(q); 
        
        const productosData = querySnapshot.docs.map(doc => ({
                idReferencia: doc.id,
            ...doc.data(),
        }));

        console.log("productosData",productosData)
        return productosData; 
    } catch (err) {
        console.error("Error los productos:", err);
        throw err;
    } 
};

export const subirProducto = async (values) => {
    try {
        const nuevoID = await obtenerYActualizarContador("productos");
        await addDoc(collection(db, "productos"), {
            nombre: capitalizarNombres(values.nombre),
            descripcion: values.descripcion,
            marca: values.marca,
            costo: values.costo,
            precio: values.precio,
            categoria: values.categoria,
            subCategoria: values.subCategoria,
            icono: values.icono,
            id: nuevoID

        });

 
        return { success: true, message: "Producto agregado exitosamente." };

    } catch (error) {
        
        console.error("Error al agregar el producto:", error);
        return { success: false, message: "Hubo un error al agregar el producto. Intenta nuevamente." };
    }
};


export const modificarProducto = async (id, nuevosDatos, onSuccess) =>{
    try{
        const referencia = doc(db, "productos", id);
        await updateDoc(referencia, nuevosDatos);
        onSuccess();
    }catch(error){
        alert("Ha sucedido un error, trata de nuevo");
        console.log(error);
    }
}

