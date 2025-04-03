import React from 'react';
import styled from "styled-components";
import { Contenedor100 } from "../Genericos/layouts";
import { TxtGenerico } from "../Genericos/titulos";
import { NumerosALetras } from "numero-a-letras";
import img from "../../img/imgLogoPosWebp.webp"

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
    
    
    @media print {
        border: none;
        padding: 1.5mm;
    }
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
    grid-template-columns: 2fr 1fr;
`;

const ContenedorLogo = styled(ContenedorSeccionTicket)`
    color: black;

    img {
        height: 20mm;
        width: 20mm;
    }
`;

const TxtPosicionado = styled(TxtGenerico)`
    color: black;
    grid-column: ${props => props.columnP ? props.columnP : ""};
    margin: ${({ margin }) => margin || "0"};
`;

const TxtFinal = styled(TxtGenerico)`
    color: black;
    font-weight: bold;
    margin: 2mm 0 10mm 0;
`;

const TablaProductos = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    
    th, td {
        text-align: center;
        border: none;
    }

    th:nth-child(1) { width: 5%; text-align: left; }
    th:nth-child(2) { text-align: left; }
    td:nth-child(1) { width: 5%; text-align: left; }
    td:nth-child(2) { width: 40%; text-align: left; }
    th:nth-child(3) { width: 10%; }
    th:nth-child(4) { width: 20%; }
`;

const Td = styled.td`
    padding: ${({ padding }) => padding || "0px"};
    text-align: center;
    padding-bottom: 10px !important;
`;

export const Ticket = React.forwardRef(({ datosTicket }, ref) => {
    const totalFormat = Number(datosTicket.total).toFixed(2);
    const totalDespuesDescuento = Number(datosTicket.total - datosTicket.descuento).toFixed(2);

    return (
        <ContenedorTicketStyled ref={ref}>
            <ContenedorLogo>
                <img src={img} alt="Logo del negocio" />
            </ContenedorLogo>

            <ContenedorSeccionTicket flexDirection="column">
                <TxtGenerico weight="normal" color="black" align="center" size="10px">
                    <b>Nombre del negocio:</b> Lorem, ipsum dolor sit amet consectetur.
                </TxtGenerico>
                <TxtGenerico color="black" align="center" size="10px">
                    <b>{datosTicket.ubicacion}</b>: {datosTicket.sucursal}
                </TxtGenerico>
            </ContenedorSeccionTicket>

            <ContenedorMetaDatos>
                <div>
                    <TxtPosicionado color="black" weight="normal" align="start" size="12px">
                        <b>Fecha:</b> {datosTicket.fechaTransaccion}
                    </TxtPosicionado>
                </div>
                <div>
                    <TxtPosicionado color="black" weight="normal" align="start" size="10px">
                        {datosTicket?.id ? datosTicket?.id : "0000"}
                    </TxtPosicionado>
                </div>

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
                        <th>#</th>
                        <th>Producto</th>
                        <th>$</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTicket.productos.map((producto, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td><b>{producto.cantidad}</b></td>
                                <td colSpan={3}>{producto.nombre}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <Td padding="10">${producto?.precio.toFixed(2)}</Td>
                                <Td padding="0">${producto?.total.toFixed(2)}</Td>
                            </tr>
                        </React.Fragment>
                    ))}
                    <tr>
                        <td><b>Total:</b></td>
                        <td><b>{datosTicket.productos.reduce((acc, producto) => acc + producto.cantidad, 0)}</b></td>
                        <td></td>
                        <td><b>${totalFormat}</b></td>
                    </tr>
                </tbody>
            </TablaProductos>
            <hr />
            <ContenedorMetaDatos>
                <TxtPosicionado color="black" align="center" size="12px">
                    Descuento:
                </TxtPosicionado>
                <TxtPosicionado color="black" weight="normal" align="center" size="10px">
                    ${datosTicket.descuento.toFixed(2)}
                </TxtPosicionado>
            </ContenedorMetaDatos>
            <hr />
            <ContenedorMetaDatos>
                <TxtPosicionado color="black" align="center" size="12px">
                    Total:
                </TxtPosicionado>
                <TxtPosicionado color="black" weight="normal" align="center" size="10px">
                    ${totalDespuesDescuento}
                </TxtPosicionado>
            </ContenedorMetaDatos>
            <hr />
            <TxtPosicionado color="black" weight="normal" align="center" size="10px">
                {datosTicket.totalEnTxt}
            </TxtPosicionado>

            <TxtFinal align="center" size="10px">
                GRACIAS POR SU COMPRA
            </TxtFinal>
        </ContenedorTicketStyled>
    );
});

Ticket.displayName = 'Ticket';