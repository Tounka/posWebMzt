import styled from "styled-components";

export const ContenedorGenerico = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};

    display: flex;
    justify-content: center;
    align-items: ${props => props.align ? props.align : "center"};

    
`