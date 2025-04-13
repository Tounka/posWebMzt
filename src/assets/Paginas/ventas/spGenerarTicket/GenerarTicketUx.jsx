import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";
import styled from "styled-components";
import { BtnGenericoRectangular } from "../../../ComponentesGenerales/Genericos/BtnsGenericos";
import { useNavigate } from "react-router";
import { useContextoPaginaVenta } from "../ContextoVenta";
import { NumerosALetras } from "numero-a-letras";
import { obtenerFecha, obtenerHora } from "../../../Fn/ObtenerFechaHora";
import { generarIdTicket } from "../../../Fn/utilidades/GenerarIdTicket";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { agregarTicket } from "../../../dbConection/m-tickets";

const ContedorTicket = styled.div`
  display: grid;
  grid-template-rows: auto 80px;
  height: 100%;
  padding: 20px;
`;
const ContenedorScroll = styled.div`
  overflow-y: auto;
`;
const ContenedorBtns = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const GenerarTicketUx = ({ catalogo }) => {
  const componentRef = useRef();
  const { carrito, setCarrito, setHandleResetProductosActualizados, descuento, setDescuento } = useContextoPaginaVenta();
  const { user, localData } = useContextoGeneral();
  const fecha = new Date();

  const carritoConTotal = carrito.map(item => ({
    ...item,
    total: item.cantidad * item.precio,
    icono: "",
    
  }));
  const sumatoriaTotal = carritoConTotal.reduce((acumulador, item) => acumulador + item.total, 0);

  const ObtenerDescuento = () => {
    if (descuento.tipo === "$") {
      return descuento.valor;
    } else if (descuento.tipo === "%") {
      return sumatoriaTotal * (descuento.valor / 100);
    }
  };

  const totalTicket = sumatoriaTotal - ObtenerDescuento();
  const Navigate = useNavigate();

  const handleRegresar = () => {
    Navigate(-1);
  };



  const datosTicket = {
    fechaTransaccion: `${obtenerFecha(fecha)} - ${obtenerHora(fecha)}`,
    usuario: {
      nombre: user.nombre,
      apellido: user.apellido
    },
    caja: "2",
    productos: carritoConTotal,
    total: sumatoriaTotal,
    descuento: ObtenerDescuento(),
    totalEnTxt: NumerosALetras(totalTicket),
    id: generarIdTicket()
  };
  const printTicket = useReactToPrint(

    {
      contentRef: componentRef,
      documentTitle: `Ticket${datosTicket.fechaTransaccion}`,

      onAfterPrint: () => {
        setCarrito([]);
        setHandleResetProductosActualizados(prevS => prevS + 1);
        setDescuento({ tipo: "$", valor: 0 });
        Navigate(-1);
      }
    });
  const handlePrint = async () => {
    console.log(datosTicket)
    console.log(localData.cajaId)
    await agregarTicket({
      fechaTransaccion:datosTicket.fechaTransaccion ,
      usuario:datosTicket.usuario ,
      caja:datosTicket.caja ,
      productos:datosTicket.productos ,
      total:datosTicket.total ,
      descuento:datosTicket.descuento ,
      totalEnTxt:datosTicket.totalEnTxt ,
      id:datosTicket.id 
    }, localData.cajaId);
    printTicket()
  }

  return (
    <Contenedor100>
      <ContedorTicket>
        <ContenedorScroll>
          <div ref={componentRef}>
            <Ticket datosTicket={datosTicket} />
          </div>
        </ContenedorScroll>
        <ContenedorBtns>
          <BtnGenericoRectangular txt="Regresar" handleClick={handleRegresar} />
          <BtnGenericoRectangular txt="Imprimir" handleClick={handlePrint} />
        </ContenedorBtns>
      </ContedorTicket>
    </Contenedor100>
  );
};
