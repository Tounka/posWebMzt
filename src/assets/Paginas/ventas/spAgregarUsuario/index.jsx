import { Formik } from "formik"
import { Contenedor100 } from "../../../ComponentesGenerales/layouts"
import { AgregarUsuarioUx } from "./AgregarUsuarioUx"
import { validateContraseña, validateCorreo } from "../../../validaciones"



export const AgregarUsuario = () => {
    const initialValues ={
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: "",
        rol: "",
    }
    const  validationSchema = yup.object({
        correo: validateCorreo,
        contraseña: validateContraseña,
    });

    const handleSubmit = () =>{
        console.log("Enviando formulario");
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Contenedor100>
                <AgregarUsuarioUx />
            </ Contenedor100>
        </Formik>
    )
}