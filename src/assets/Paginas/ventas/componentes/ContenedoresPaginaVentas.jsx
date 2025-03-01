import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/layouts";

export const ContenedorVentasStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-template-rows: 200px 1fr;
    width: 100%;
    max-width: 100%;
    height: 100%;
`

export const SeccionCategoria = styled(Contenedor100)`
        grid-column: 1 / 2;

        flex-direction: column;
        align-items: start;
        gap: 10px;
        padding: 20px;

        
        max-width: auto;
        box-sizing: border-box; 

        -webkit-box-shadow: 0px 5px 12px -8px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 5px 12px -8px rgba(0,0,0,0.5);
        box-shadow: 0px 5px 12px -8px rgba(0,0,0,0.5);
`
export const ContenedorCategoria = styled(Contenedor100)`
        width: 100%;
        max-width: 100%; 
        overflow-x: auto; 
        overflow-y: hidden;
        flex-direction: row;
        gap: 10px;
        justify-content: start;
        box-sizing: border-box;
        width: calc(100dvw - var(--anchoMenuLateral) - 390px ); 
       
`
export const SeccionItems = styled(Contenedor100)`
        grid-column: 1 / 2;
        grid-row: 2/3;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        padding: 20px;
        gap: 20px;
  
`
export const ContenedorItems = styled(Contenedor100)`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: start;
        align-items: start;
        align-content: flex-start;
       
        `
export const SeccionCarrito = styled(Contenedor100)`
        grid-column: 2 / 3;
        grid-row: 1/3;
        background-color: var(--colorPrincipal);
        border-radius: 40px 0 0 40px ; 

        display: flex;
        flex-direction: column;

        justify-content: start;

        h2{
            margin: 20px 0;
            
        }
        
`