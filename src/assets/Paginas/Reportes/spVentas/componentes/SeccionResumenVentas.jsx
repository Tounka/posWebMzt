import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useContextoGeneral } from '../../../../Contextos/ContextoGeneral';
import { ContenedorSeccionReporte } from './ContenedorSeccionReporteGenerico';
import { useContextoReportes } from '../../../../Contextos/Reportes';

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

export const ResumenVentas = ({tickets}) => {

    
    const obtenerProductosVendidos = (tickets) => {
        const productosVendidos = {};
    
        tickets.forEach((ticket) => {
            ticket.productos.forEach((producto) => {
                const nombreProducto = producto.nombre;
    
                if (productosVendidos[nombreProducto]) {
                    productosVendidos[nombreProducto] += producto.cantidad;
                } else {
                    productosVendidos[nombreProducto] = producto.cantidad;
                }
            });
        });
    
        const data = Object.keys(productosVendidos).map((nombre) => ({
            name: nombre,
            ItemsVendidos: productosVendidos[nombre]
        }));
    
        data.sort((a, b) => b.ItemsVendidos - a.ItemsVendidos);
    
        return data;
    };
    

    return (
        <ContenedorSeccionReporte txt='Ranking De Ventas'>


            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={obtenerProductosVendidos(tickets)}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"  />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ItemsVendidos" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </ContenedorSeccionReporte>
    );

}
