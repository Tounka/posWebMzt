import { Formik } from "formik";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { AgregarProductoUx } from "./AgregarProductoUx";
import { validateApellido, validateContraseña, validateCorreo, validateGenerica, validateNombre, validateNumeroGenerico } from "../../../validaciones";
import * as yup from "yup";
import { subirProducto } from "../../../dbConection/m-productos";
import { useNavigate } from "react-router";

export const AgregarProducto = () => {
    const navigate = useNavigate(); 

    const initialValues = {
        nombre: "",
        descripcion: "",
        marca: "",
        costo: 0,
        precio: 0,
        categoria: "",
        subCategoria: "",
    };

    const validationSchema = yup.object({
        nombre: validateNombre,
        descripcion: validateGenerica,
        marca: validateGenerica,
        categoria: validateGenerica,
        subCategoria: validateGenerica,
        costo: validateNumeroGenerico,
        precio: validateNumeroGenerico,
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await subirProducto(values); 
            setSubmitting(false); 
            navigate("/inventario/productos"); 
        } catch (error) {
            setSubmitting(false); 
            alert("Error al agregar el producto");
           
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Contenedor100>
                    <AgregarProductoUx isSubmitting={isSubmitting} /> 
                </Contenedor100>
            )}
        </Formik>
    );
};
