import styled from "styled-components";
import { Contenedor100 } from "../layouts";
import { IoLogoNpm } from "react-icons/io";
import { TxtGenerico } from "../titulos";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { userData } from "../../Contextos/dataDesarollo";
import { NumerosALetras, numerosALetras } from "numero-a-letras";

export const ContenedorTicketStyled = styled.div`
    width: 80mm;
    max-width: 80mm;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: solid 2px var(--colorPrincipal);
    color: black;
    min-height: 300px;
    padding: 1.5mm;
`;

const ContenedorSeccionTicket = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
    justify-content: center;
    align-items: center;
    color: black;

    div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

const ContenedorMetaDatos = styled(ContenedorSeccionTicket)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ContenedorLogo = styled(ContenedorSeccionTicket)`
    color: black;

    svg {
        height: 20mm; /* Tamaño deseado del icono */
        width: 20mm;  /* Mantener la proporción */
    }
`;

const TxtPosicionado = styled(TxtGenerico)`
    color: black;
    grid-column: ${props => props.columnP ? props.columnP : ""};
`;

const TablaProductos = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    
    th, td {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
        border: none;
    }

    th {
        text-align: center;
        border: none;
    }

    th:nth-child(1) { width: 60%;   text-align: left;}
    td:nth-child(1) { width: 60%;   text-align: left;}
    th:nth-child(2), th:nth-child(3) { width: 10%; }
    th:nth-child(4) { width: 20%; }
`;

export const Ticket = ({ datosTicket  }) => {
    // Asegúrate de que `total` es un número y usa `toFixed`
    const totalFormat = Number(datosTicket.total).toFixed(2);

    return (
        <ContenedorTicketStyled>
            <ContenedorLogo>
                <IoLogoNpm size="50mm" />
            </ContenedorLogo>

            <ContenedorSeccionTicket flexDirection="column">
                <TxtGenerico weight="normal" color="black" align="center" size="10px">
                    <b> Nombre del negocio:</b> Lorem, ipsum dolor sit amet consectetur.
                </TxtGenerico>
                <TxtGenerico color="black" align="center" size="10px">
                    <b> {datosTicket.ubicacion}</b> : {datosTicket.sucursal}
                </TxtGenerico>
            </ContenedorSeccionTicket>

            <ContenedorMetaDatos>
                <TxtPosicionado color="black" weight="normal" align="start" size="12px" columnP="1/3">
                    <b>  Fecha:</b> {datosTicket.fechaTransaccion.fecha} : {datosTicket.fechaTransaccion.hora}
                </TxtPosicionado>
                <div>
                    <TxtPosicionado color="black" align="start" size="12px">
                        Usuario:
                    </TxtPosicionado>
                    <TxtPosicionado color="black" weight="normal" align="start" size="10px">
                        {datosTicket.usuario.nombre} {datosTicket.usuario.apellido}
                    </TxtPosicionado>
                </div>
                <div>
                    <TxtPosicionado color="black" align="start" size="12px">
                        Caja:
                    </TxtPosicionado>
                    <TxtPosicionado color="black" weight="normal" align="start" size="10px">
                        {datosTicket.caja}
                    </TxtPosicionado>
                </div>
            </ContenedorMetaDatos>

            <hr />
            <TablaProductos>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>#</th>
                        <th>$</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTicket.productos.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>${producto?.precio.toFixed(2)}</td>
                            <td>${producto?.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </TablaProductos>
            <hr />
            <ContenedorMetaDatos>
                <TxtPosicionado color="black" align="center" size="12px">
                    Total:
                </TxtPosicionado>
                <TxtPosicionado color="black" weight="normal" align="center" size="10px">
                    ${totalFormat} {/* Usar el total formateado */}
                </TxtPosicionado>
            </ContenedorMetaDatos>
            <hr />
            <TxtPosicionado color="black" weight="normal" align="center" size="10px">
                {datosTicket.totalEnTxt}
            </TxtPosicionado>
        </ContenedorTicketStyled>
    );
};

