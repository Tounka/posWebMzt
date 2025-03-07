import styled from "styled-components";
import { Contenedor100 } from "../../ComponentesGenerales/layouts";
import { BtnSecciones } from "../../ComponentesGenerales/BtnsGenericos";
import { HiTicket } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
const ContenedorReportes = styled(Contenedor100)`
    display: flex;
    justify-content: center;  
    align-items: center; 
    
    gap: 50px;                    
    flex-wrap: wrap;
`


export const InventariosUx = () => {

    return (

        <ContenedorReportes>
            <BtnSecciones txtSeccion="Generar Inventario" to="./inventario/generar-inventario" icono={<GiNotebook />}/>
            <BtnSecciones txtSeccion="Productos" to="./inventario/productos" icono={<FaBook />} />
            <BtnSecciones txtSeccion="Entrada de Producto" to="./inventario/entrada-producto"  icono={<FaBoxOpen />}/>
       
        </ContenedorReportes>
    )
}