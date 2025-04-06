import { collection, getDocs, query, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { capitalizarNombres } from "../Fn/utilidades/herramientas";

export const obtenerCategorias = async () => {
    try {
        const q = query(collection(db, "categorias"));
        const querySnapshot = await getDocs(q); 
        
        const categoriasData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(categoriasData)
        
        return categoriasData; 
    } catch (err) {
        console.error("Error al obtener categorías:", err);
        throw err;
    } 
};

export const subirCategoria = async (values) => {

    const referencia = doc(collection(db, "categorias")); 
    try {
        await setDoc(referencia, {
            categoria: capitalizarNombres(values.nombre),
            categoriaPadre: values.subirCategoria ? capitalizarNombres(values.categoriaSeleccionada) : "", 
            icono: values.icono,
        });

    } catch (err) {
        
        alert("Error al agregar categoría");
    }
};
