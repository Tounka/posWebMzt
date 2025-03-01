import styled from "styled-components"
import { BtnRegresar } from "../../../ComponentesGenerales/btnRedondo"


const ContenedorAgregarUsuarioStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 600px;
    height: 800px;
    max-width: 80&;
    max-height: 80%;
    border-radius: 20px;
    border: solid 2px var(--colorPrincipal);
    position: relative;
`

const HeaderTxt = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: var(--colorPrincipal);
`
const ContenedorBtn = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
`
export const AgregarUsuarioUx = () => {
    
    return (
        <ContenedorAgregarUsuarioStyled>
            <HeaderTxt> Altas </HeaderTxt>
            <ContenedorBtn> <BtnRegresar bgColor="var(--colorPrincipal)" /> </ContenedorBtn>

        </ContenedorAgregarUsuarioStyled>
    )
}