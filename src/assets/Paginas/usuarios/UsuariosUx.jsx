import styled from "styled-components";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BtnRedondo } from "../../ComponentesGenerales/Genericos/btnRedondo";
import { useNavigate } from "react-router";
import { TxtGenerico } from "../../ComponentesGenerales/Genericos/titulos";
import { FaEdit } from "react-icons/fa";
import { ModalModificarUsuario } from "./ModalModificarUsuario";
import { useState } from "react";
const ContenedorPaginaUsuarios = styled.div`
   width: 100% ;
   min-width: 800px;
   height: 100%;
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


const columns = [
    { field: "id", headerName: "Id", width: 80 },
    { field: "nombre", headerName: "Nombre", width: 125 },
    { field: "apellido", headerName: "Apellido", width: 125 },
    { field: "fechaCreacion", headerName: "Fecha Ingreso", width: 150 },
    { field: "rol", headerName: "Rol", width: 100 },
 
];
const paginationModel = { page: 0, pageSize: 15 };

export const UsuariosUx = ({rows}) => {
    const [usuario, setUsuario] = useState();
    const [boolModalModificarUsuario, setBoolModificarUsuario] = useState(false);
    const Navigate = useNavigate();
    const handleClickBtnAgregar = () => {
        Navigate("/usuarios/agregar-usuario");
    }

    const handleClick = (usuario) =>{
        setUsuario(usuario);
        setBoolModificarUsuario(true);
    }
    
    return (

        <ContenedorPaginaUsuarios>
            <ContenedorTop>
                <TxtGenerico size="22px" color="var(--colorPrincipal)" >
                    Usuarios
                </TxtGenerico>
                <ContenedorBtn>

                <BtnRedondo diametro="60px" bgColor="var(--colorPrincipal)" handleClick={() => handleClickBtnAgregar()} />
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
                    handleClick(params.row);
                 
                 
                }}
            />
            </PaperStyled>

            <ModalModificarUsuario usuarioSeleccionado={usuario} isOpen={boolModalModificarUsuario} onClose={() => setBoolModificarUsuario(false)} />
        </ContenedorPaginaUsuarios>
    )
}