import { ContenedorGenerico } from "../../../../ComponentesGenerales/Genericos/contendores"
import { PieChart, Pie, Legend , Sector, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import { ContenedorSeccionReporte } from "./ContenedorSeccionReporteGenerico";
import styled from "styled-components";


const ContenedorIzquierdoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

`
const ContenedorTxt = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    color: var(--colorPrincipal);
    width: 100%;
    font-weight: bold;
    font-size: 28px;
    
   
            :nth-child(1){
                text-align: end;
            }
        
    
`
const ContenedorGeneral = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    width: 100%;
    height: 100%;
`
export const SeccionReporteProducto = ({ inventario }) => {
    const ItemsFlotantes = inventario.catalogo.flatMap(categoria => categoria.items);
    const SumaCategorias = inventario.catalogo.map(categoria => ({    
        categoria: categoria.categoria,
        stockTotal: categoria.items.reduce((acc, item) => acc + item.stock, 0),
        costoTotal: categoria.items.reduce((acc, item) => acc + (item.stock * item.costo), 0),
        precioTotal: categoria.items.reduce((acc, item) => acc + (item.stock * item.precio), 0),
    }));

    const sumaItems = {
        stockTotal: SumaCategorias.reduce((acc, item) => acc + item.stockTotal, 0),
        precioTotal: SumaCategorias.reduce((acc, item) => acc + item.precioTotal, 0),
        costoTotal: SumaCategorias.reduce((acc, item) => acc + item.costoTotal, 0),

    }

    
    const data01 = SumaCategorias.map(categoria => ({
        name: categoria.categoria,
        value: categoria.costoTotal,

    }))
    const data02 = SumaCategorias.map(categoria => ({
        name: categoria.categoria,
        value: categoria.precioTotal,

    }))

    return (

        <ContenedorSeccionReporte txt="Resumen Productos" width="100%" height="350px" id="reporte-ventas">


            <ContenedorGeneral gap="10px" display="flex" >
                <ContenedorIzquierdoStyled>
                    <ContenedorTxt>
                        <div>
                            Productos:
                        </div>
                        <div>
                            {sumaItems.stockTotal}
                        </div>
                    </ContenedorTxt>
                    <ContenedorTxt>
                        <div>
                            Costo:
                        </div>
                        <div>
                            ${sumaItems.costoTotal}
                        </div>
                    </ContenedorTxt>
                    <ContenedorTxt>
                        <div>
                            Precio:
                        </div>
                        <div>
                            ${sumaItems.precioTotal}
                        </div>
                    </ContenedorTxt>

                </ContenedorIzquierdoStyled>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </ContenedorGeneral>
        </ContenedorSeccionReporte>

    )
}