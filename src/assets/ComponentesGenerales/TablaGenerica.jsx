import styled from "styled-components";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const PaperStyled = styled(Paper)`
    border: solid 2px var(--colorPrincipal);
`;

export const TablaGenerica = ({ rows, columns, height=600 }) => {
    return (
        <PaperStyled sx={{ height: height, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 15 } } }}
                pageSizeOptions={[5, 10, 15]}
                slotProps={{
                    columnHeaders: {
                        style: { color: "var(--colorPrincipal)", fontWeight: "bold" },
                    },
                }}
                sx={{ border: 0 }}
            />

        </PaperStyled>
    );
};

// Ejemplo de uso en otro componente
export const ProductosUx = () => {
    const navigate = useNavigate();
    const handleClickBtnAgregar = () => {
        navigate("/usuarios/agregar-usuario");
    };

    const columns = [
        { field: "id", headerName: "Id", width: 50 },
        { field: "producto", headerName: "Nombre", width: 200 },
        { field: "contraseña", headerName: "Password", width: 150 },
        { field: "fechaIngreso", headerName: "Fecha Ingreso", width: 150 },
        { field: "rol", headerName: "Rol", width: 80 },
        { field: "fn", headerName: "Fn", width: 50 },
    ];

    const rows = [
        { id: 1, nombre: "Juan Pérez", contraseña: "123456", fechaIngreso: "2023-01-15", rol: "Admin", fn: "Editar" },
        { id: 2, nombre: "María Gómez", contraseña: "abcdef", fechaIngreso: "2023-02-10", rol: "Usuario", fn: "Eliminar" },
    ];

    return <TablaGenerica rows={rows} columns={columns} />;
};
