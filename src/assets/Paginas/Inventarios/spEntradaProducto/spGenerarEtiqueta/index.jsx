
import { Contenedor100 } from "../../../../ComponentesGenerales/Genericos/layouts";

import { useContextoInventarios } from "../../../../Contextos/ContextoInventarios";
import { GenerarEtiquetaUx } from "./GenerarEtiquetaUx";

export const GenerarEtiqueta = () => {

    const {etiquetasAGenerar, setEtiquetasAGenerar} = useContextoInventarios();

    return (

        <Contenedor100>
            <GenerarEtiquetaUx />
        </Contenedor100>

    );
};
