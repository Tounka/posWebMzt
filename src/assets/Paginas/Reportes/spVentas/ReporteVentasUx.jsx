import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { ContenedorGenerico } from "../../../ComponentesGenerales/contendores";
import { SeccionReporteProducto } from "./componentes/SeccionReporteProducto";
import { ResumenVentasPorDia } from "./componentes/SeccionResumenVentasPorDia";
import { ResumenVentas } from "./componentes/SeccionResumenVentas";
const ContenedorReportes = styled(Contenedor100)`
    display: flex;
    justify-content: start;  
    align-items: center; 
    flex-direction: column;
    padding: 20px;
    gap: 50px;                    
   
    overflow: auto;
    
`


export const ReporteVentasUx = () => {
    const {inventarios} = useContextoGeneral();
    
    return (

        <ContenedorReportes>
            <SeccionReporteProducto inventario= {inventarios[0]} />
            <ResumenVentas inventario= {inventarios[0]} />
            <ResumenVentasPorDia inventario= {inventarios[0]} />
       
        </ContenedorReportes>
    )
}