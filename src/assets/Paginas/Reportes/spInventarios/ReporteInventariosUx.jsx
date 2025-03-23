import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { H2Pos, TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { ModalGenerico } from "../../../ComponentesGenerales/Modal";
import { Ticket } from "../../../ComponentesGenerales/Ticket/TicketGenerico";
import { BtnGenericoRectangular } from "../../../ComponentesGenerales/Genericos/BtnsGenericos";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { useState } from "react";
import { TablaGenerica } from "../../../ComponentesGenerales/Genericos/TablaGenerica";




const ContenedorPagina = styled(Contenedor100)`
    display: flex;
    flex-direction: column;
    justify-content: start;  
    align-items: start; 
    padding: 20px;
    color: var(--colorPrincipal);
    gap: 10px;
`;

const Contenedorinventarios = styled(ContenedorPagina)`
    align-items: start;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: start;
    
`
const ContenedorDias = styled.div`
    width: 100%;
    
`
const ContenedorInventariostyled = styled.div`
    cursor: pointer;
`
const ContenedorGenerico = styled.div`
    padding: 5px;
    width: 100%;
    background-color: ${({ bgColor }) => bgColor || "var(--colorPrincipal)"};
    cursor: ${({ cursor }) => cursor || "normal"};
    overflow: hidden;
`
const ContenedorTabla = styled(ContenedorGenerico)`
    display: flex;
    height: auto;
    max-height: ${props => props.isOpen ? "600px" : "0"};
    transition: max-height .3s ease-in-out;
    
`
const SeccionInventario = ({dia, index, height}) => {
    const [isOpenTabla, setIsOpenTabla] = useState(false);
    const handleClick = () =>{
        setIsOpenTabla(prev => !prev);
    }
    const columns = [
        { field: "id", headerName: "Id", width: 50 },
        { field: "nombre", headerName: "Producto", width: 200 },
        { field: "categoria", headerName: "Categoria", width: 150 },
        { field: "subCategoria", headerName: "Sub Categoria", width: 150 },
        { field: "costo", headerName: "Costo", width: 80 },
        { field: "precio", headerName: "Precio", width: 80 },
        { field: "stock", headerName: "Cantidad", width: 120 },
        { field: "stockCalculado", headerName: "Cantidad Calculado", width: 150 },
    ];

    console.log(dia)
    const todosLosItems = dia.categorias.reduce((acumulador, categoria) => {
        return acumulador.concat(categoria.items);
    }, []);
    
    const rows = todosLosItems;
      console.log(todosLosItems);

    return (
        <ContenedorDias key={index}>
            <ContenedorGenerico cursor="pointer" onClick={() =>handleClick()} >
                <TxtGenerico color="white" size="20px">
                    {dia.fecha.toLocaleString()}
                </TxtGenerico>
                
            </ContenedorGenerico>

            <ContenedorTabla isOpen={isOpenTabla}>
                <TablaGenerica height={height} rows={rows} columns={columns} />;
            </ContenedorTabla>

        </ContenedorDias>
    )
}

export const ReporteInventariosUx = () => {
    const { inventarios } = useContextoGeneral();






    return (
        <ContenedorPagina>
            <H2Pos color="var(--colorPrincipal)">inventarios</H2Pos>
            <>
                {inventarios.map((dia, index) => (
                    <SeccionInventario height="500px"  dia={dia} index={index} />
                ))}
            </>

        </ContenedorPagina>


    );
};

