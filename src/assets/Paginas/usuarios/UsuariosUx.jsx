import styled from "styled-components";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BtnRedondo } from "../../ComponentesGenerales/btnRedondo";
import { useNavigate } from "react-router";

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
    flex-direction: row-reverse;
    margin-bottom: -4px;
`
const PaperStyled = styled(Paper)`
    border: solid 2px var(--colorPrincipal);
`

const rows = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com", contraseña: "123456", fechaIngreso: "2023-01-15", rol: "Admin", Fn: "Editar" },
    { id: 2, nombre: "María Gómez", email: "maria@example.com", contraseña: "abcdef", fechaIngreso: "2023-02-10", rol: "Usuario", Fn: "Eliminar" },
    { id: 3, nombre: "Carlos López", email: "carlos@example.com", contraseña: "qwerty", fechaIngreso: "2023-03-05", rol: "Usuario", Fn: "Editar" },
    { id: 4, nombre: "Ana Martínez", email: "ana@example.com", contraseña: "password", fechaIngreso: "2023-04-20", rol: "Admin", Fn: "Eliminar" },
    { id: 5, nombre: "Luis Rodríguez", email: "luis@example.com", contraseña: "123abc", fechaIngreso: "2023-05-12", rol: "Usuario", Fn: "Editar" },
    { id: 6, nombre: "Laura Sánchez", email: "laura@example.com", contraseña: "abc123", fechaIngreso: "2023-06-18", rol: "Usuario", Fn: "Eliminar" },
    { id: 7, nombre: "Pedro García", email: "pedro@example.com", contraseña: "pass123", fechaIngreso: "2023-07-22", rol: "Admin", Fn: "Editar" },
    { id: 8, nombre: "Sofía Fernández", email: "sofia@example.com", contraseña: "123pass", fechaIngreso: "2023-08-30", rol: "Usuario", Fn: "Eliminar" },
    { id: 9, nombre: "Miguel Torres", email: "miguel@example.com", contraseña: "qwe123", fechaIngreso: "2023-09-14", rol: "Usuario", Fn: "Editar" },
    { id: 10, nombre: "Elena Ruiz", email: "elena@example.com", contraseña: "123qwe", fechaIngreso: "2023-10-05", rol: "Admin", Fn: "Eliminar" },
    { id: 11, nombre: "Jorge Díaz", email: "jorge@example.com", contraseña: "pass456", fechaIngreso: "2023-11-11", rol: "Usuario", Fn: "Editar" },
    { id: 12, nombre: "Carmen Vargas", email: "carmen@example.com", contraseña: "456pass", fechaIngreso: "2023-12-25", rol: "Usuario", Fn: "Eliminar" },
    { id: 13, nombre: "Daniel Castro", email: "daniel@example.com", contraseña: "abc456", fechaIngreso: "2024-01-01", rol: "Admin", Fn: "Editar" },
    { id: 14, nombre: "Isabel Morales", email: "isabel@example.com", contraseña: "456abc", fechaIngreso: "2024-02-14", rol: "Usuario", Fn: "Eliminar" },
    { id: 15, nombre: "Francisco Ortega", email: "francisco@example.com", contraseña: "pass789", fechaIngreso: "2024-03-08", rol: "Usuario", Fn: "Editar" },
    { id: 16, nombre: "Patricia Reyes", email: "patricia@example.com", contraseña: "789pass", fechaIngreso: "2024-04-22", rol: "Admin", Fn: "Eliminar" },
    { id: 17, nombre: "Antonio Méndez", email: "antonio@example.com", contraseña: "qwe789", fechaIngreso: "2024-05-30", rol: "Usuario", Fn: "Editar" },
    { id: 18, nombre: "Lucía Herrera", email: "lucia@example.com", contraseña: "789qwe", fechaIngreso: "2024-06-15", rol: "Usuario", Fn: "Eliminar" },
    { id: 19, nombre: "Manuel Jiménez", email: "manuel@example.com", contraseña: "pass000", fechaIngreso: "2024-07-04", rol: "Admin", Fn: "Editar" },
    { id: 20, nombre: "Raquel Navarro", email: "raquel@example.com", contraseña: "000pass", fechaIngreso: "2024-08-19", rol: "Usuario", Fn: "Eliminar" },
];

const columns = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "contraseña", headerName: "Password", width: 150 },
    { field: "fechaIngreso", headerName: "Fecha Ingreso", width: 150 },
    { field: "rol", headerName: "Rol", width: 80 },
    { field: "fn", headerName: "Fn", width: 50 },
];
const paginationModel = { page: 0, pageSize: 15 };

export const UsuariosUx = () => {
    const Navigate = useNavigate();
    const handleClickBtnAgregar = () =>{
        Navigate("/usuarios/agregar-usuario");
    }
    return (

        <ContenedorPaginaUsuarios>
            <ContenedorTop>
                <BtnRedondo  diametro= "60px"  bgColor ="var(--colorPrincipal)" handleClick={() => handleClickBtnAgregar()}/>
            </ContenedorTop>
            <PaperStyled sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    
                    sx={{ border: 0 }}
                />
            </PaperStyled>
        </ContenedorPaginaUsuarios>
    )
}