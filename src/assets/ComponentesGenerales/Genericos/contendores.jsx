import styled from "styled-components";

export const ContenedorGenerico = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};

    display: ${({display}) => display || "flex" };
    gap: ${({gap}) => gap || "0px" };
    justify-content: center;
    align-items: ${props => props.align ? props.align : "center"};

    
`



export const ContenedorItemProducto = styled.div`
        height: 160px;
        width: 160px;
        display: grid;
        grid-template-rows: 5fr 2fr 2fr;
        border-radius: 20px;
        padding: 5px 0;
        justify-content: center;
        align-items: start;
        background-color: var(--colorBlanco);
        user-select: none;
        cursor: default ;

        border: dashed 2px var(--colorPrincipal);
`
