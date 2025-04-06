import { Formik } from "formik"
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts"
import { AgregarUsuarioUx } from "./AgregarUsuarioUx"
import { validateApellido, validateContraseña, validateCorreo, validateNombre, validateRol } from "../../../validaciones"
import * as yup from "yup"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../../dbConection/firebase"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router"
import { capitalizarNombres } from "../../../Fn/utilidades/herramientas"


export const AgregarUsuario = () => {
    const navigate = useNavigate();
    const initialValues ={
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
        rol: "",
    }
    const  validationSchema  = yup.object({
        nombre: validateNombre,
        apellido: validateApellido,
        correo: validateCorreo,
        contrasena: validateContraseña,
        rol: validateRol,
    });

    const handleSubmit =async (values) =>{
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, values.correo,values.contrasena);
            const user = userCredential.user;
            console.log(user)
            await setDoc(doc(db,"usuarios", user.uid),{
                nombre: capitalizarNombres(values.nombre) ,
                apellido: capitalizarNombres(values.apellido) ,
                email: values.correo,
                rol: values.rol,
                fechaCreacion: serverTimestamp(),
            });
            navigate("/usuarios");
        }catch (error) {
            console.error("Error al registrar usuario:", error);
            
            // Manejo de errores comunes
            let errorMessage = "Error al registrar usuario";
            switch (error.code) {
              case "auth/email-already-in-use":
                errorMessage = "El correo electrónico ya está en uso";
                break;
              case "auth/invalid-email":
                errorMessage = "Correo electrónico inválido";
                break;
              case "auth/weak-password":
                errorMessage = "La contraseña debe tener al menos 6 caracteres";
                break;
              default:
                errorMessage = error.message;
            }
            
            // setError(errorMessage); // Si usas un estado para mostrar errores en UI
            alert(errorMessage); // Opción simple
          }
        };
      
    
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