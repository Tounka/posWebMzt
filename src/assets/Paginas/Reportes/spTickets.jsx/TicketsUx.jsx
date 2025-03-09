import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";
import { H2Pos, TxtGenerico } from "../../../ComponentesGenerales/titulos";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { useState } from "react";
import { Modal } from "@mui/material";
import { ModalGenerico } from "../../../ComponentesGenerales/Modal";
import { BtnGenericoRectangular } from "../../../ComponentesGenerales/BtnsGenericos";
import { imprimirTicket } from "../../../Fn/Imprimir";


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
const ContenedorTicketStyled = styled.div`
    cursor: pointer;
    overflow-y: auto;
    height: 300px;
    width: 320px;

`


export const TicketsUx = () => {
    const { tickets } = useContextoGeneral();
    const [boolModalTicket, setBoolModalTicket] = useState(false);
    const [ticketSeleccionado, setTicketSeleccionado] = useState();

    const handleClickTicket = (ticket) => {
        setTicketSeleccionado(ticket);
        setBoolModalTicket(true);
    }

        
 
    return (
        <ContenedorPagina>
            <H2Pos color="var(--colorPrincipal)">Tickets</H2Pos>
            <>
                {tickets.map((dia, index) => (
                    <ContenedorDias key={index}>
                        <TxtGenerico color="var(--colorPrincipal)" size="20px">
                            {dia.fecha}
                        </TxtGenerico>

                        <ContenedorTickets>
                            {dia.tickets.map((ticket, ticketIndex) => (
                                <ContenedorTicketStyled onClick={() => handleClickTicket(ticket)}>
                                    <Ticket key={ticketIndex} datosTicket={ticket} />
                                </ContenedorTicketStyled>
                            ))}
                        </ContenedorTickets>
                    </ContenedorDias>
                ))}
            </>
            <ModalGenerico isOpen={boolModalTicket} onClose={() => setBoolModalTicket(false)} >
                {ticketSeleccionado ?
                    <Contenedor100 gap="10px" direction="column">
                        <Ticket datosTicket={ticketSeleccionado} />
                        <Contenedor100 gap="10px">
                            <BtnGenericoRectangular txt="Re-imprimir" handleClick={() => imprimirTicket(ticketSeleccionado)} />
                        </Contenedor100>
                    </Contenedor100>
                    : <>
                    </>
                }
            </ModalGenerico>
        </ContenedorPagina>


    );
};

