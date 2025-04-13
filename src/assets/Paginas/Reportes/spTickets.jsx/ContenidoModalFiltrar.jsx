import { useEffect, useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { obtenerTicketPorId } from "../../../dbConection/m-tickets";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";

const ContenedorModalStyle = styled.div`
    width: 90%;
    min-height: 600px;
    height: 90%;
    min-width:600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

`
const ContenedorBusqueda = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;
`;

const SelectStyle = styled.select`
    padding: 8px;
    border: 2px solid var(--colorPrincipal);
    border-radius: 5px;
    font-size: 16px;
    outline: none;
`;

const InputStyle = styled.input`
    padding: 10px;
    border: 2px solid var(--colorPrincipal);
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    
    &:focus {
        border-color: var(--colorSecundario);
    }
`;

export const InputBuscarTicket = ({ setTicketEncontrado }) => {
    const [tipoBusqueda, setTipoBusqueda] = useState("id");
    const [id, setId] = useState("");
    const [fecha, setFecha] = useState("");
    const [monto, setMonto] = useState("");


    const handleSearch = async () => {
        if (tipoBusqueda === "id") {

            setTicketEncontrado(await obtenerTicketPorId(id))
        } else {
            onSearch({ tipo: "fecha_monto", fecha, monto });
        }
    };

    return (
        <ContenedorBusqueda>
            {/* Selector de tipo de búsqueda */}
            {/* <SelectStyle value={tipoBusqueda} onChange={(e) => setTipoBusqueda(e.target.value)}>
                <option value="id">Buscar por ID</option>
                <option value="fecha_monto">Buscar por Fecha y Monto</option>
            </SelectStyle> */}

            {/* Input para búsqueda por ID */}
            {tipoBusqueda === "id" && (
                <InputStyle
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingrese el ID del ticket"
                />
            )}

            {/* Inputs para búsqueda por Fecha y Monto */}
            {/* {tipoBusqueda === "fecha_monto" && (
                <>
                    <InputStyle
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                    <InputStyle
                        type="number"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder="Ingrese el monto"
                    />
                </>
            )} */}

            {/* Botón de búsqueda */}
            <button onClick={handleSearch}>Buscar</button>
        </ContenedorBusqueda>
    );
};

export const ModalFiltrar = () => {
    const [ticketEncontrado, setTicketEncontrado] = useState(null);
    const [componenteARenderizar, setComponenteARenderizar] = useState(null);



    return (
        <ContenedorModalStyle>
            <TxtGenerico color="var(--colorPrincipal)" align="center" weight="bold" size="22px">
                Buscar Ticket
            </TxtGenerico>

            <InputBuscarTicket setTicketEncontrado={setTicketEncontrado} />

          
            {ticketEncontrado === "Ticket no encontrado" ? (
                <TxtGenerico color="var(--colorPrincipal)">(No se ha encontrado ningún ticket con ese Id)</TxtGenerico>
            ) : ticketEncontrado ? (
                <Ticket datosTicket={ticketEncontrado} />
            ) : null}
        </ContenedorModalStyle>
    );
};
