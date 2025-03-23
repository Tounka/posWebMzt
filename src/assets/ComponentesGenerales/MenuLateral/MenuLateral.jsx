import styled from "styled-components"
import { H2Pos, TxtGenerico } from "../Genericos/titulos"

import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";


import { routesConfig } from "../../../routes";
import { ContenedorGenerico } from "../Genericos/contendores";
//Editar archivo rutas para agregar una nueva seccion al menu

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
      
        console.log(primerSegmentoActual)

        if (to === "/" || location.pathname==="/generar-ticket") {
            setIsCurrentLocation(location.pathname === "/" );
            console.log("hola")
        }  else {
            
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

export const MenuLateral = () => {
    const { user } = useContextoGeneral();

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <MenuLateralStyled user={user}>
            <H2Pos> POS </H2Pos>
            {routesConfig.map((ruta, index) => {
                if (ruta.isMenuPath !== undefined && ruta.requiredPermission.includes(user?.rol)) {
                    return (
                        <ItemMenu
                            key={index} // Asegúrate de incluir una clave única
                            icon={ruta.isMenuPath.icon}
                            txt={ruta.isMenuPath.txt}
                            to={ruta.isMenuPath.to}
                        />
                    );
                }
                return null; // Retorna null si no se cumple la condición
            })}
        </MenuLateralStyled>
    )
}