import { Formik } from "formik";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";
import { EntradaProductoUx } from "./EntradaProductoUx";
import { useContextoGeneral } from "../../../../Contextos/ContextoGeneral";

export const EntradaProducto = () => {
    const { catalogo, user } = useContextoGeneral();

    // Configura los valores iniciales con 0
    const initialValues = catalogo.reduce((acc, categoria) => {
        categoria.items.forEach(item => {
            acc[item.id] = 0; // Establece cada valor de item a 0
        });
        return acc;
    }, {});

    const handleSubmit = (values) => {
        console.log("Inventario guardado:", values);
    };

    return (
        <Formik
            initialValues={initialValues} // Configuración de los valores iniciales
            onSubmit={handleSubmit}
        >
            {({ values, handleChange }) => (
                <Contenedor100>
                    <EntradaProductoUx
                        catalogo={catalogo}
                        user={user}
                        values={values}
                        handleChange={handleChange} // Pasa los valores y handleChange al componente
                    />
                </Contenedor100>
            )}
        </Formik>
    );
};
