import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { ContenedorGenerico } from "../../../ComponentesGenerales/Genericos/contendores";
import { SeccionReporteProducto } from "./componentes/SeccionReporteProducto";
import { ResumenVentasPorDia } from "./componentes/SeccionResumenVentasPorDia";
import { ResumenVentas } from "./componentes/SeccionResumenVentas";
import { SeccionTicketPromedio } from "./componentes/SeccionTicketPromedio";
import { SeccionSetFecha } from "./componentes/SeccionSetFecha";
import { useEffect, useState } from "react";
import { obtenerTickets } from "../../../dbConection/m-tickets";
import { useContextoReportes } from "../../../Contextos/Reportes";
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
    const { setRangoFechas, rangoFechas } = useContextoGeneral();
    const {inventarios} = useContextoReportes()
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const tickets = await obtenerTickets({diasAObtener:30});
                setTickets(tickets);
                
            } catch (error) {
                console.error("Error al obtener tickets:", error);
            }
        };
    
        fetchTickets();
    }, []);


    return (

        <ContenedorReportes>

           <SeccionTicketPromedio tickets={tickets} /> 
            <SeccionReporteProducto inventario={inventarios[0]} />
            <ResumenVentas tickets={tickets} />
            <ResumenVentasPorDia tickets={tickets} />


        </ContenedorReportes>
    )
}