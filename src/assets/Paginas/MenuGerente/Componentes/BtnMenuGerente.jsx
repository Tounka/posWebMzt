import styled from "styled-components";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { FaBox } from "react-icons/fa";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";

const BtnMenuGerenteStyled = styled.div`
    height: 90%;
    width: 90%;
    background-color: var(--colorPrincipal);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    padding:5px;
    gap: 10px;
    border-radius: 30px;
    transition: transform .2s ease;

    &:hover{
        transform: scale(.95);
        transition: transform .2s ease;
    }
`;

const ContenedorSeccion = styled(Contenedor100)`
    align-items: ${({ align }) => align || ""};
`

const SpanIcono = styled.span`
    font-size: 44px;
    display: flex;
    justify-content: center;
    align-items: end;
   
`
const ContenedorBtnMenuGerente = styled(Contenedor100)`
    display: flex;
    justify-content: center;
    align-items: center;

    grid-column:${({ colums }) => colums || ""};
    grid-row:${({ rows }) => rows || ""};

`;

export const BtnMenuGerente = ({ txt = "Herramienta", icono = <FaBox />, position = ["auto", "auto"]  }) => {
    return (
        <ContenedorBtnMenuGerente colums={position[0]} rows={position[1]} >
            <BtnMenuGerenteStyled>
                <SpanIcono>{icono}</SpanIcono>
                <TxtGenerico align="center" size="22px" >{txt}</TxtGenerico>

            </BtnMenuGerenteStyled>
        </ContenedorBtnMenuGerente>
    );
};
