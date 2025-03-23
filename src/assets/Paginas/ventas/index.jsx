import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts"
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useContextoPaginaVenta } from "./ContextoVenta";

import { VentasUx } from "./ventasUx"
export const Ventas = () =>{
    const {catalogo} = useContextoGeneral();
    const {productosEnVenta} = useContextoPaginaVenta();
    return(
        <Contenedor100>
                <VentasUx catalogo={productosEnVenta} />
        </ Contenedor100>
    )
}