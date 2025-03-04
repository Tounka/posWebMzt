import styled from "styled-components";
import { Contenedor100 } from "../../ComponentesGenerales/layouts";
import { BtnSecciones } from "../../ComponentesGenerales/BtnsGenericos";
import { HiTicket } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
const ContenedorReportes = styled(Contenedor100)`
    display: flex;
    justify-content: center;  
    align-items: center; 
    
    gap: 50px;                    
    flex-wrap: wrap;
`


export const ReportesUx = () => {

    return (

        <ContenedorReportes>
            <BtnSecciones txtSeccion="Inventarios" to="./reportes/inventario"/>
            <BtnSecciones txtSeccion="Ventas" to="./reportes/ventas"/>
            <BtnSecciones txtSeccion="Tickets" to="./reportes/tickets" icono={<HiTicket />}/>
       
        </ContenedorReportes>
    )
}