import styled from "styled-components";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";

export const ContenedorChildren = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;
`;

const ContenedorSeccionModalStyled = styled.div`
    display: grid;
    grid-template-rows: 40px auto;
  
    width: 100%;
    height: 100%;
`;

export const ContenedorSeccionModal = ({ titulo = "ARQUEO", children }) => {
    return (
        <ContenedorSeccionModalStyled>
            <TxtGenerico size="24px" align="center" color="var(--colorPrincipal)" >{titulo}</TxtGenerico>
            <ContenedorChildren>  
                {children}
            </ContenedorChildren>
        </ContenedorSeccionModalStyled>
    );
};