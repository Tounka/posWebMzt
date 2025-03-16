import { Formik } from "formik"
import { Contenedor100 } from "../../../ComponentesGenerales/layouts"
import { AgregarUsuarioUx } from "./AgregarUsuarioUx"
import { validateApellido, validateContraseña, validateCorreo, validateNombre, validateRol } from "../../../validaciones"
import * as yup from "yup"


export const AgregarUsuario = () => {
    const initialValues ={
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: "",
        rol: "",
    }
    const  validationSchema  = yup.object({
        nombre: validateNombre,
        apellido: validateApellido,
        correo: validateCorreo,
        contraseña: validateContraseña,
        rol: validateRol,
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
                <AgregarUsuarioUx />
               
            </ Contenedor100>
        </Formik>
    )
}