
import { useState } from "react";
import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";
import styled from "styled-components";
import { BtnGenericoRectangular } from "../../../ComponentesGenerales/BtnsGenericos";
import { useNavigate } from "react-router";
import { useContextoPaginaVenta } from "../ContextoVenta";
import { NumerosALetras } from "numero-a-letras";
import { obtenerFecha, obtenerHora } from "../../../Fn/ObtenerFechaHora";
import { imprimirTicket } from "../../../Fn/Imprimir";
const ContedorTicket = styled.div`
  display: grid;
  grid-template-rows: 400px 80px;
`
const ContenedorScroll = styled.div`
  overflow-y: auto;
`
const ContenedorBtns = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const  GenerarTicketUx = ({ catalogo }) => {
  const {carrito, setCarrito, setHandleResetProductosActualizados, descuento, setDescuento } = useContextoPaginaVenta();
  const fecha = new Date();
  const carritoConTotal = carrito.map(item => ({
    ...item,
    total: item.cantidad * item.precio
  }));
  const sumatoriaTotal = carritoConTotal.reduce((acumulador,item) => acumulador + item.total, 0);
  const ObtenerDescuento  = () =>{
    if(descuento.tipo === "$"){
      return(descuento.valor);
    }else if(descuento.tipo === "%"){
      let descuentoRam = sumatoriaTotal * (descuento.valor / 100);
      return(descuentoRam);
    }
  }
  const totalTicket = sumatoriaTotal - ObtenerDescuento();
  const Navigate = useNavigate();

  const handleRegresar = () =>{
    Navigate(-1);
  }

  const handleImprimir = () =>{
    //
    imprimirTicket(datosTicket)
    setCarrito([]);
    setHandleResetProductosActualizados(prevS => prevS + 1);
    Navigate(-1);
    setDescuento({tipo: "$", valor: 0})
  }
  
  const datosTicket = {
    fechaTransaccion: {
      fecha: obtenerFecha(fecha),
      hora: obtenerHora(fecha),
    },
    usuario: {
      nombre: "María",
      apellido: "Gómez"
    },
    caja: "2",
    productos: carritoConTotal,
    total: sumatoriaTotal,
    descuento: ObtenerDescuento(), 
    totalEnTxt: NumerosALetras(totalTicket),
  }


  return (
    <Contenedor100>
      <ContedorTicket>
        <ContenedorScroll>
          <Ticket datosTicket={datosTicket} />
        </ContenedorScroll>

        <ContenedorBtns>
          <BtnGenericoRectangular txt = "Regresar" handleClick={() => handleRegresar()} />
          <BtnGenericoRectangular txt = "Imprimir" handleClick={() => handleImprimir()} />
        </ContenedorBtns>
      </ContedorTicket>
    </Contenedor100>
  )
};
