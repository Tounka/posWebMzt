import styled from "styled-components";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BtnRedondo } from "../../../ComponentesGenerales/btnRedondo";
import { useNavigate } from "react-router";
import { TablaGenerica } from "../../../ComponentesGenerales/TablaGenerica";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { TxtGenerico } from "../../../ComponentesGenerales/titulos";

const ContenedorPaginaUsuarios = styled.div`

    padding: 20px;
    display: flex;
  
    
    
    flex-direction: column;
`
const ContenedorTop = styled.div`
    height: 80px;
    width: 100%;
    padding: 10px ;
    border: solid 2px var(--colorPrincipal);
    border-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -4px;
    position: relative;
`
const PaperStyled = styled(Paper)`
    border: solid 2px var(--colorPrincipal);
`
const ContenedorBtn = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;

`
const ContenedorTabla = styled.div`
    width: 800px;
   
`

export const ProductosUx = () => {
    const Navigate = useNavigate();
    const handleClickBtnAgregar = () => {
        Navigate("/inventario/productos/agregar-producto");
    }
    const transformarCatalogo = (catalogo) => {
        let rows = [];

        catalogo.forEach(categoria => {
            categoria.items.forEach(item => {
                rows.push({
                    id: item.id,
                    categoria: categoria.categoria, // Asignamos la categoría
                    txt: item.nombre, // Nombre del producto
                    costo: item.costo, // Costo del producto
                    precio: item.precio, // Precio del producto
                    fn: "Editar", // Acción por defecto, puedes cambiarlo por "Eliminar" si es necesario
                });
            });
        });

        return rows;
    };

    const { catalogo } = useContextoGeneral();
    const columns = [
        { field: "categoria", headerName: "Categoria", width: 150 },
        { field: "id", headerName: "Id", width: 50 },
        { field: "txt", headerName: "Nombre", width: 200 },
        { field: "costo", headerName: "Costo", width: 150 },
        { field: "precio", headerName: "Precio", width: 80 },
        { field: "fn", headerName: "Fn", width: 50 },
    ];

    const rows = transformarCatalogo(catalogo);

    return (

        <ContenedorPaginaUsuarios>
            <ContenedorTabla>

                <ContenedorTop>
                    <TxtGenerico size="22px" color="var(--colorPrincipal)" >
                        Productos
                    </TxtGenerico>
                    <ContenedorBtn>
                        <BtnRedondo diametro="40px" bgColor="var(--colorPrincipal)" handleClick={() => handleClickBtnAgregar()} />
                    </ContenedorBtn>
                </ContenedorTop>


                <TablaGenerica rows={rows} columns={columns} onAddClick={handleClickBtnAgregar} />
            </ContenedorTabla>
        </ContenedorPaginaUsuarios>
    )
}