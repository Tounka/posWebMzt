import { Formik } from "formik";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { EntradaProductoUx } from "./v1/EntradaProductoUx";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { EntradaProductoUxV2 } from "./EntradaProductoUxV2";
import { useContextoInventarios } from "../../../Contextos/ContextoInventarios";

export const EntradaProducto = () => {
    const { catalogo, user } = useContextoGeneral();

    const {etiquetasAGenerar, setEtiquetasAGenerar} = useContextoInventarios();

    return (

        <Contenedor100>
            <EntradaProductoUxV2
                catalogo={catalogo}
            />
        </Contenedor100>

    );
};
