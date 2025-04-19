import { ContenedorSeccionReporte } from "./ContenedorSeccionReporteGenerico"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Pie, PieChart, Cell, Legend  } from 'recharts';

import styled from "styled-components";
import { Contenedor100 } from "../../../../ComponentesGenerales/Genericos/layouts";
import { TxtGenerico } from "../../../../ComponentesGenerales/Genericos/titulos";
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
const TxtSeccion = styled(TxtGenerico)`

    color: var(--colorPrincipal);
    width: 100%;
  
    font-size: 28px;
    
 
        
    
`
export const SeccionTicketPromedio = ({ tickets }) => {
    const ticketsTotales = tickets.length;
    const ticketTotalPrecio = tickets.reduce((acum, t) => {
        return acum + (t.total - (t.descuento || 0));
    }, 0);

    const totales = {
        ticketsTotales,
        ticketTotalPrecio,
    };

    const ObtenerPromediosPorDiaSemana = (tickets) => {
        const totalesPorDia = {
            lunes: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            martes: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            miércoles: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            jueves: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            viernes: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            sábado: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
            domingo: { totalTickets: 0, totalPrecio: 0, cantidadDias: 0 },
        };

        const fechasRegistradas = new Set();

        tickets.forEach((ticket) => {
            const fechaSolo = ticket.fechaTransaccion.split(" - ")[0]; // "17/04/2025"
            const [dia, mes, año] = fechaSolo.split("/");
            const fechaFormateada = `${mes}/${dia}/${año}`;
            const fechaObj = new Date(fechaFormateada);

            if (isNaN(fechaObj.getTime())) return;

            const diaSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"][fechaObj.getDay()];

            // Solo contar cada día una vez para `cantidadDias`
            const claveFecha = `${diaSemana}-${fechaSolo}`;
            if (!fechasRegistradas.has(claveFecha)) {
                fechasRegistradas.add(claveFecha);
                totalesPorDia[diaSemana].cantidadDias += 1;
            }

            totalesPorDia[diaSemana].totalTickets += 1;
            totalesPorDia[diaSemana].totalPrecio += (ticket.total - (ticket.descuento || 0));
        });

        return Object.keys(totalesPorDia).map((dia) => {
            const { totalTickets, totalPrecio, cantidadDias } = totalesPorDia[dia];
            return {
                name: dia,
                promedioDias: cantidadDias > 0 ? totalTickets / cantidadDias : 0,
                promedioPrecioDias: cantidadDias > 0 ? totalPrecio / cantidadDias : 0,
            };
        });
    };
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560', '#2ECC71'];

    const promedios = ObtenerPromediosPorDiaSemana(tickets);

    const ObtenerIngresosPorDia = (tickets) => {
        const ingresosPorDia = {
            lunes: 0, martes: 0, miércoles: 0, jueves: 0, viernes: 0, sábado: 0, domingo: 0,
        };

        tickets.forEach((ticket) => {
            const fechaSolo = ticket.fechaTransaccion.split(" - ")[0];
            const [dia, mes, año] = fechaSolo.split("/");
            const fechaFormateada = `${mes}/${dia}/${año}`;
            const fechaObj = new Date(fechaFormateada);

            if (isNaN(fechaObj.getTime())) return;

            const diaSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"][fechaObj.getDay()];
            ingresosPorDia[diaSemana] += (ticket.total - (ticket.descuento || 0));
        });

        return Object.entries(ingresosPorDia).map(([dia, total]) => ({
            name: dia,
            total
        }));
    };

    const ingresos = ObtenerIngresosPorDia(tickets);

    return (
        <ContenedorSeccionReporte txt="Ticket Promedio" height="600px">
            <ContenedorSeccionTicketPromedio>
                <ContenedorTop>

                    <ContenedorTxtPadre>
                        <ContenedorTxt>
                            <TxtSeccion color="black" size="20px">Tickets en revision</TxtSeccion>
                            <TxtSeccion color="black" size="20px">{totales.ticketsTotales}</TxtSeccion>
                        </ContenedorTxt>
                        <ContenedorTxt>
                            <TxtSeccion color="black" size="20px">Ticket Promedio</TxtSeccion>
                            <TxtSeccion color="black" size="20px">${(totales.ticketTotalPrecio / totales.ticketsTotales).toFixed(2)}</TxtSeccion>
                        </ContenedorTxt>
                    </ContenedorTxtPadre>


                    <Contenedor100>
                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie
                                    data={ingresos}
                                    dataKey="total"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {ingresos.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                               
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
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