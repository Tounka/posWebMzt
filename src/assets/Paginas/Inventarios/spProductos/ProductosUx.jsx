import styled from "styled-components";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BtnRedondo } from "../../../ComponentesGenerales/Genericos/btnRedondo";
import { useNavigate } from "react-router";
import { TablaGenerica } from "../../../ComponentesGenerales/Genericos/TablaGenerica";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { ModalModificarProductos } from "../Componentes/ModalModificarProducto";
import { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { ModalAgregarCategoria } from "../Componentes/ModalAgregarCategoria";




const ContenedorPaginaUsuarios = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    height: 100%;
    
    
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
    right: ${({ position }) =>  position || 0};

    top: 0;

    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;

`
const ContenedorTabla = styled.div`
    width: 100% ;
   min-width: 800px;
   height: 100%;
`

export const ProductosUx = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState();
    const [boolModalProductoSeleccionado, setBoolModalProductoSeleccionado] = useState(false);
    const [boolModalAgregarCategoria, setBoolModalAgregarCategoria] = useState(false);

    const handleClick = (producto) =>{
        console.log(producto)
        setProductoSeleccionado(producto);
        setBoolModalProductoSeleccionado(true);
    }
    const handleClickBtnAgregarCategoria =() => {
        setBoolModalAgregarCategoria(true)
    }
    
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
                    categoria: categoria.categoria, 
                    subCategoria: categoria.categoriaPadre, 
                    txt: item.nombre, 
                    costo: item.costo, 
                    precio: item.precio, 
        
                    productoCompelto: {
                        ...item,
                        categoria: categoria.categoria,
                        subCategoria: categoria.categoriaPadre
                    }
                });
            });
        });

        return rows;
    };

    const { catalogo } = useContextoGeneral();

    const columns = [
        { field: "categoria", headerName: "Categoria", width: 150 },
        { field: "subCategoria", headerName: "subCategoria", width: 150 },
        { field: "id", headerName: "Id", width: 80 },
        { field: "txt", headerName: "Nombre", width: 200 },
        { field: "costo", headerName: "Costo", width: 80 },
        { field: "precio", headerName: "Precio", width: 80 },
  

    ];
    const paginationModel = { page: 0, pageSize: 15 };
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
                    <ContenedorBtn position={"50px"}>
                        <BtnRedondo diametro="40px" bgColor="var(--colorPrincipal)" icon={<BiCategoryAlt />} handleClick={() => handleClickBtnAgregarCategoria()} />
                    </ContenedorBtn>
                </ContenedorTop>

                <PaperStyled sx={{ height: "90%", width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                        onCellClick={(params) => {
                            handleClick(params.row.productoCompelto);
                 
                        }}
                    />
                </PaperStyled>

            </ContenedorTabla>

            <ModalModificarProductos productoSeleccionado={productoSeleccionado} isOpen={boolModalProductoSeleccionado} onClose={() => setBoolModalProductoSeleccionado(false)} />
            <ModalAgregarCategoria isOpen={boolModalAgregarCategoria} onClose={() => setBoolModalAgregarCategoria(false)} />
        </ContenedorPaginaUsuarios>
    )
}