import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { ContenedorGenerico } from "../../../ComponentesGenerales/Genericos/contendores";
import { SeccionReporteProducto } from "./componentes/SeccionReporteProducto";
import { ResumenVentasPorDia } from "./componentes/SeccionResumenVentasPorDia";
import { ResumenVentas } from "./componentes/SeccionResumenVentas";
import { SeccionTicketPromedio } from "./componentes/SeccionTicketPromedio";
import { SeccionSetFecha } from "./componentes/SeccionSetFecha";
import { useState } from "react";
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
    const { inventarios, tickets,setRangoFechas,rangoFechas } = useContextoGeneral();

    


    return (

        <ContenedorReportes>

            {rangoFechas != null ? (
                <>
                    {/* `<SeccionTicketPromedio tickets={tickets} />` */}
                    <SeccionReporteProducto inventario={inventarios[0]} />
                    <ResumenVentas inventario={inventarios[0]} />
                    <ResumenVentasPorDia inventario={inventarios[0]} />
                </>
            ) : (
                <SeccionSetFecha setRangoFechas={setRangoFechas} />
            )}


        </ContenedorReportes>
    )
}