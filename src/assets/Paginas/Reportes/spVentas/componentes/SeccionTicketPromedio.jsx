import { ContenedorSeccionReporte } from "./ContenedorSeccionReporteGenerico"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";
import { TxtGenerico } from "../../../../ComponentesGenerales/titulos";
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const ContenedorSeccionTicketPromedio = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`
const ContenedorTop = styled.div`
    height: 40%;
    width: 100%;

    display: grid;
    grid-template-columns: 2fr 1fr;
    
`
const ContenedorTxt = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 10px;
  :nth-child(1){
        text-align: end;
    }
`
const ContenedorTxtPadre = styled(Contenedor100)`
    width: 100%;
    display: flex;
    flex-direction: column;

    
`
export const SeccionTicketPromedio = ({tickets}) => {
    console.log(tickets)
    const ObtenerTicketsTotales = tickets.reduce((acc, dia) => {
        return acc + dia.tickets.length;
    }, 0);
    const ObtenerTicketTotalPrecio = tickets.reduce((acumuladorTotal, dia) => {
        const totalPorDia = dia.tickets.reduce((acumuladorDia, ticket) => {
            const totalTicket = ticket.total || 0; 
            const descuentoTicket = ticket.descuento || 0; 
            return acumuladorDia + (totalTicket - descuentoTicket);
        }, 0);
        return acumuladorTotal + totalPorDia;
    }, 0);
    const totales = {
        ticketsTotales:  ObtenerTicketsTotales,
        ticketTotalPrecio : ObtenerTicketTotalPrecio,
    }

    const ObtenerPromediosPorDiaSemana = (tickets) => {
        // Objeto para almacenar los totales por día de la semana
        const totalesPorDia = {
            lunes: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            martes: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            miércoles: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            jueves: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            viernes: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            sábado: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            domingo: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
        };
    
        // Función para obtener el día de la semana a partir de una fecha en formato "DD/MM/YYYY"
        const obtenerDiaSemana = (fecha) => {
            const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    
            // Convertir "DD/MM/YYYY" a "MM/DD/YYYY"
            const [dia, mes, año] = fecha.split("/");
            const fechaFormateada = `${mes}/${dia}/${año}`;
    
            // Crear el objeto Date
            const fechaObj = new Date(fechaFormateada);
    
            // Validar si la fecha es válida
            if (isNaN(fechaObj.getTime())) {
                console.error(`Fecha inválida: ${fecha}`);
                return null;
            }
    
            return diasSemana[fechaObj.getDay()];
        };
    
        // Recorremos cada día en tickets
        tickets.forEach((dia) => {
            const diaSemana = obtenerDiaSemana(dia.fecha);
    
            // Validar si diaSemana es una clave válida en totalesPorDia
            if (diaSemana && totalesPorDia.hasOwnProperty(diaSemana)) {
                // Incrementamos la cantidad de días para este día de la semana
                totalesPorDia[diaSemana].cantidadDias += 1;
    
                // Sumamos los tickets y precios para el día de la semana correspondiente
                dia.tickets.forEach((ticket) => {
                    totalesPorDia[diaSemana].totalTickets += 1; // Contamos 1 ticket
                    totalesPorDia[diaSemana].totalPrecio += (ticket.total - (ticket.descuento || 0)); // Sumamos el precio neto
                });
            } else {
                console.error(`Día de la semana no válido: ${diaSemana}`);
            }
        });
    
        // Generar el arreglo en el formato deseado
        const data = Object.keys(totalesPorDia).map((dia) => {
            const { totalTickets, totalPrecio, cantidadDias } = totalesPorDia[dia];
            return {
                name: dia, // Nombre del día de la semana
                promedioDias: cantidadDias > 0 ? totalTickets / cantidadDias : 0, // Promedio de tickets por día
                promedioPrecioDias: cantidadDias > 0 ? totalPrecio / cantidadDias : 0, // Promedio de precios por día
                amt: cantidadDias, // Cantidad de días (opcional, puedes eliminarlo si no lo necesitas)
            };
        });
    
        return data;
    };
    const promedios = ObtenerPromediosPorDiaSemana(tickets);
    console.log("promedios")
    console.log(promedios)
    return (
        <ContenedorSeccionReporte txt="Ticket Promedio" height="600px">
            <ContenedorSeccionTicketPromedio>
                <ContenedorTop>

                    <ContenedorTxtPadre>
                        <ContenedorTxt>
                            <TxtGenerico color="black" size="20px">Tickets en revision</TxtGenerico>
                            <TxtGenerico color="black" size="20px">{totales.ticketsTotales }</TxtGenerico>
                        </ContenedorTxt>
                        <ContenedorTxt>
                            <TxtGenerico color="black" size="20px">Ticket Promedio</TxtGenerico>
                            <TxtGenerico color="black" size="20px">${(totales.ticketTotalPrecio /totales.ticketsTotales).toFixed(2) }</TxtGenerico>
                        </ContenedorTxt>
                    </ContenedorTxtPadre>


                    <Contenedor100>

                    </Contenedor100>
                </ContenedorTop>


                <ResponsiveContainer width="100%" height="60%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={promedios}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="promedioDias" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="promedioPrecioDias" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        
                    </AreaChart>
                </ResponsiveContainer>
            </ContenedorSeccionTicketPromedio>
        </ContenedorSeccionReporte>
    )
}