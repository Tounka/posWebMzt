import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";
import { H2Pos, TxtGenerico } from "../../../ComponentesGenerales/titulos";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";


const ContenedorPagina = styled(Contenedor100)`
    display: flex;
    flex-direction: column;
    justify-content: start;  
    align-items: start; 
    padding: 20px;
    color: var(--colorPrincipal);
    gap: 10px;
`;

const ContenedorTickets = styled(ContenedorPagina)`
    align-items: start;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: start;
    
`
const ContenedorDias = styled.div`
    width: 100%;
    
`


export const TicketsUx = () => {
    const { tickets } = useContextoGeneral();

    return (
        <ContenedorPagina>
            <H2Pos color="var(--colorPrincipal)">Tickets</H2Pos>
            <>
                {tickets.map((dia, index) => (
                    <ContenedorDias key={index}>
                        <TxtGenerico color="var(--colorPrincipal)" size= "20px">
                            {dia.fecha}
                        </TxtGenerico>

                        <ContenedorTickets>
                        {dia.tickets.map((ticket, ticketIndex) => (
                            <Ticket key={ticketIndex} datosTicket = {ticket} />
                        ))}
                        </ContenedorTickets>
                    </ContenedorDias>
                ))}
            </>
        </ContenedorPagina>


    );
};

