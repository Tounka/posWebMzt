import styled from "styled-components"

const BloqueadorStyled = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--colorPrincipal);
    font-size: 52px;
    text-align: center;
    font-weight: bold;
    color: white;
    
`
export const Bloqueador = ({txt})=>{
    return(
        <BloqueadorStyled>
            {txt}
        </BloqueadorStyled>
    )
}