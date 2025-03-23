import { useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";

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

export const InputBuscarTicket = ({ onSearch }) => {
    const [tipoBusqueda, setTipoBusqueda] = useState("id");
    const [id, setId] = useState("");
    const [fecha, setFecha] = useState("");
    const [monto, setMonto] = useState("");

    const handleSearch = () => {
        if (tipoBusqueda === "id") {
            onSearch({ tipo: "id", valor: id });
        } else {
            onSearch({ tipo: "fecha_monto", fecha, monto });
        }
    };

    return (
        <ContenedorBusqueda>
            {/* Selector de tipo de búsqueda */}
            <SelectStyle value={tipoBusqueda} onChange={(e) => setTipoBusqueda(e.target.value)}>
                <option value="id">Buscar por ID</option>
                <option value="fecha_monto">Buscar por Fecha y Monto</option>
            </SelectStyle>

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
            {tipoBusqueda === "fecha_monto" && (
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
            )}

            {/* Botón de búsqueda */}
            <button onClick={handleSearch}>Buscar</button>
        </ContenedorBusqueda>
    );
};

export const ModalFiltrar = () => {
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null);

    const handleSearch = (filtro) => {
        console.log("Criterio de búsqueda:", filtro);
        // Aquí podrías hacer una consulta a la base de datos o filtrar los tickets
        setResultadoBusqueda(filtro);
    };

    return (
        <ContenedorModalStyle>
            <TxtGenerico color="var(--colorPrincipal)" align="center" weight="bold" size="22px">
                Buscar Ticket
            </TxtGenerico>

            <InputBuscarTicket onSearch={handleSearch} />

            {/* Muestra los resultados (puedes personalizarlo) */}
            {resultadoBusqueda && (
                <pre>{JSON.stringify(resultadoBusqueda, null, 2)}</pre>
            )}
        </ContenedorModalStyle>
    );
};
