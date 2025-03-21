import { Formik } from "formik"
import { Contenedor100 } from "../../../ComponentesGenerales/layouts"
import { AgregarProductoUx } from "./AgregarProductoUx"
import { validateApellido, validateContraseña, validateCorreo, validateGenerica, validateNombre, validateNumeroGenerico } from "../../../validaciones"
import * as yup from "yup"


export const AgregarProducto = () => {
    const initialValues ={
        nombre: "",
        descripcion: "",
        marca: "",
        costo: 0,
        precio: 0,
        categoria: "",
        subCategoria: "",
    }
    const  validationSchema  = yup.object({
        nombre: validateNombre,
        descripcion: validateGenerica,
        marca: validateGenerica,
        categoria: validateGenerica,
        subCategoria: validateGenerica,
        costo: validateNumeroGenerico,
        precio: validateNumeroGenerico,
    
    
    });

    const handleSubmit = (values) =>{
        console.log(values);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            <Contenedor100>
                <AgregarProductoUx />
               
            </ Contenedor100>
        </Formik>
    )
}