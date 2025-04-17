import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";
import { H2Pos, TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { useState, useEffect, useRef } from "react";
import { Modal } from "@mui/material";
import { ModalGenerico } from "../../../ComponentesGenerales/Modal";
import { BtnGenericoRectangular } from "../../../ComponentesGenerales/Genericos/BtnsGenericos";
import { imprimirTicket } from "../../../Fn/Imprimir";
import { ModalFiltrar } from "./ContenidoModalFiltrar";
import { useReactToPrint } from "react-to-print";
import { useContextoReportes } from "../../../Contextos/Reportes";

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
`;

const ContenedorDias = styled.div`
    width: 100%;
`;

const ContenedorTicketStyled = styled.div`
    cursor: pointer;
    overflow-y: auto;
    height: 300px;
    width: 320px;
`;

const ContenedorTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TicketsUx = () => {

    const {ticketsPorDias} = useContextoReportes();
    const [boolModalTicket, setBoolModalTicket] = useState(false);
    const [ticketsFormateados, setTicketsFormateados] = useState([]);
    const [ticketSeleccionado, setTicketSeleccionado] = useState();
    const [boolModalFiltrarTickets, setBoolModalFiltrarTickets] = useState(false);

    const currentRef = useRef();
    useEffect(() => {
        // Actualizamos los tickets formateados al cargar los datos
        setTicketsFormateados(transformarTickets(ticketsPorDias));
    }, [ticketsPorDias]); // Dependiendo de 'tickets', se actualiza la lista de tickets
    const handlePrint = useReactToPrint({
        contentRef: currentRef,
        documentTitle: `Ticket`,

    });
    const handleClickTicket = (ticket) => {
        setTicketSeleccionado(ticket);
        setBoolModalTicket(true);
    };

    const handleClickBtnModal = () => {
        setBoolModalFiltrarTickets(true);
    };

    // Función para transformar los tickets
    function transformarTickets(tickets) {
        const groupedTickets = tickets.reduce((acc, ticket) => {
            const fecha = new Date(ticket.fecha.toDate()); // Asegurar que es un objeto Date
            const fechaKey = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`; // Solo la fecha sin hora
            const horaMinuto = `${fecha.getHours()}:${fecha.getMinutes().toString().padStart(2, "0")}`; // Formato HH:MM

            if (!acc[fechaKey]) {
                acc[fechaKey] = [];
            }
            acc[fechaKey].push({
                ...ticket,
                fechaTransaccion: `${fechaKey} - ${horaMinuto}`, // Guardamos la hora aparte
               
            });

            return acc;
        }, {});

        return Object.keys(groupedTickets).map(fecha => ({
            fecha,
            tickets: groupedTickets[fecha],
        }));
    }



    return (
        <ContenedorPagina>
            <ContenedorTop>
                <H2Pos color="var(--colorPrincipal)">Tickets de los últimos 3 días</H2Pos>
                <BtnGenericoRectangular txt="Buscar" handleClick={() => handleClickBtnModal()} />
            </ContenedorTop>
            <>
                {ticketsFormateados.map((dia, index) => (
                    <ContenedorDias key={dia.fecha}> {/* Usamos fecha como key para el día */}
                        <TxtGenerico color="var(--colorPrincipal)" size="20px">
                            {dia.fecha}
                        </TxtGenerico>

                        <ContenedorTickets>
                            {dia.tickets.map((ticket) => (
                                <ContenedorTicketStyled
                                    key={ticket.id}  // Usamos ID o una combinación única
                                    onClick={() => handleClickTicket(ticket)}
                                >
                                    <Ticket datosTicket={ticket} />
                                </ContenedorTicketStyled>
                            ))}
                        </ContenedorTickets>
                    </ContenedorDias>
                ))}
            </>
            <ModalGenerico isOpen={boolModalTicket} onClose={() => setBoolModalTicket(false)}>
                {ticketSeleccionado ? (
                    <Contenedor100 gap="10px" direction="column">
                        <div ref={currentRef}>
                            <Ticket datosTicket={ticketSeleccionado} />

                        </div>
                        <Contenedor100 gap="10px">
                            <BtnGenericoRectangular txt="Re-imprimir" handleClick={handlePrint} />
                        </Contenedor100>
                    </Contenedor100>
                ) : null}
            </ModalGenerico>

            <ModalGenerico isOpen={boolModalFiltrarTickets} onClose={() => setBoolModalFiltrarTickets(false)}>
                <ModalFiltrar />
            </ModalGenerico>
        </ContenedorPagina>
    );
};
