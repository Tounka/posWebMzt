import styled from "styled-components"
import { H2Pos, TxtGenerico } from "../titulos"
import { BsCashStack } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { ContenedorGenerico } from "../contendores";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";


const MenuLateralStyled = styled.div`
    width: var(--anchoMenuLateral);
    height: 100dvh;
    position: fixed;
    left: 0;
    top: 0;

    display: ${props => props.user ? "flex" : "none"};
    flex-direction: column;
    background-color: var(--colorPrincipal);
    
    align-items: center;
    h2{
        margin: 20px 0;
    }
`

const ContenedorItemMenuStyled = styled.button`
    height: 100px;
    width: 100%;
    background-color:${props => props.isSelected ? " var(--colorVerde)" : "transparent"};
    background-color:${props => props.isCurrentLocation ? " var(--colorVerde)" : "transparent"};
    display: grid;
    padding: 10px 0;
    
    grid-template-rows: 3fr 1fr;

    &:hover{
        background-color: var(--colorVerde);

    }

    transition: backgrodun-color .2s ease;
    cursor: pointer;
    border: none;
 `


const ItemMenu = ({ icon, txt, to }) => {
    const Navigate = useNavigate();
    const location = useLocation();

    const [isCurrentLocation, setIsCurrentLocation] = useState(false);

    useEffect(() => {
        // Extraer el primer segmento de la ruta actual
        const primerSegmentoActual = location.pathname.split("/")[1];
        const primerSegmentoTo = to.split("/")[1];

        if (to === "/") {
            setIsCurrentLocation(location.pathname === "/");
        } else {

            setIsCurrentLocation(primerSegmentoActual === primerSegmentoTo);
        }
    }, [location, to]);

    const handleClick = () => {
        Navigate(to);

    }
    return (
        <ContenedorItemMenuStyled isCurrentLocation={isCurrentLocation} onClick={() => handleClick()}>
            <ContenedorGenerico align="end" >
                <TxtGenerico line=".8" size="58px" > {icon} </TxtGenerico>
            </ContenedorGenerico>

            <ContenedorGenerico >
                <TxtGenerico line=".8"> {txt} </TxtGenerico>
            </ContenedorGenerico>
        </ContenedorItemMenuStyled>
    )
}

export const MenuLateral = ({ user }) => {
    const { ubicacionPagina } = useContextoGeneral();

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <MenuLateralStyled user={user}>
            <H2Pos> POS </H2Pos>

            <ItemMenu icon={<BsCashStack />} txt="Venta" to="/" />
            <ItemMenu icon={<HiOutlineClipboardList />} txt="Inventario" to="/inventario" />
            <ItemMenu icon={<FiFileText />} txt="Reportes" to="/reportes" />
            <ItemMenu icon={<FaUser />} txt="Usuarios" to="/usuarios" />
        </MenuLateralStyled>
    )
}