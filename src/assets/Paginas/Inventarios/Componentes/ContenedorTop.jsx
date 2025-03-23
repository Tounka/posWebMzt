
import styled from "styled-components";
import { H2Pos } from "../../../ComponentesGenerales/Genericos/titulos";
const ContenedorTopStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 10px;
    max-width: 585px;
    text-align: center;
    align-items: center;
    h2{
        margin: 0;
        &:nth-child(1){
            text-align: end;
            font-size: 20px;
        }
        &:nth-child(3){
            font-size: 20px;
            text-align: center;
        }
    }
`;


export const ContenedorTop = ({user, fechaHora, txt="INVENTARIO"}) => {
    return (
        <ContenedorTopStyled>
            <H2Pos color="var(--colorPrincipal)">
                {user.nombre.toUpperCase()} 
            </H2Pos>
            <H2Pos color="var(--colorPrincipal)">
                 - {txt} - 
            </H2Pos>
            <H2Pos color="var(--colorPrincipal)">
                {fechaHora}
            </H2Pos>
        </ContenedorTopStyled>
    );
};