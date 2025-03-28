import { Formik } from "formik";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { EntradaProductoUxV2 } from "./EntradaProductoUxV2";

export const EntradaProducto = () => {
    const { catalogo, user } = useContextoGeneral();

    
    return (

        <Contenedor100>
            <EntradaProductoUxV2
                catalogo={catalogo}
            />
        </Contenedor100>

    );
};
