import styled from "styled-components";

export const ContenedorGenerico = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};

    display: ${({display}) => display || "flex" };
    gap: ${({gap}) => gap || "0px" };
    justify-content: center;
    align-items: ${props => props.align ? props.align : "center"};

    
`
