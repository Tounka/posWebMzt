import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ContenedorSeccionReporte } from './ContenedorSeccionReporteGenerico';

export const ResumenVentasPorDia = ({tickets}) => {
    const agruparPorFecha = (tickets) => {
        const agrupados = {};
    
        tickets.forEach(ticket => {
            const fecha = ticket.fechaTransaccion?.split(" - ")[0]; // ej: "17/04/2025"
            if (!agrupados[fecha]) agrupados[fecha] = [];
            agrupados[fecha].push(ticket);
        });
    
        return Object.entries(agrupados).map(([fecha, tickets]) => ({
            name: fecha,
            venta: tickets.reduce((acc, t) => acc + (t.total || 0), 0),
            costo: tickets.reduce((acc, t) => acc + (t.costoTotal || 0), 0),
        }));
    };
    
 
    return (
        <ContenedorSeccionReporte txt='Reporte Ventas Por Dia'>


            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={200}
                    data={agruparPorFecha(tickets)}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="venta" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="costo" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </ContenedorSeccionReporte>
    );

}
