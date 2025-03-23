import styled from "styled-components";
import { ContenedorGenerico } from "../../../../ComponentesGenerales/Genericos/contendores";

 const ContenedorSeccionReporteStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    color: black;
`

const TituloSeccion = styled.p`
    margin-bottom: 10px;
    font-size: 24px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    user-select: none;
    color: white;
    min-height: 40px;
    max-height: 40px;
    background-color: var(--colorPrincipal);

    
`


export const ContenedorSeccionReporte = ({children, txt="Seccion", height= "300px", width}) =>{
    return(
        <ContenedorSeccionReporteStyled height={height} width={width}> 
            <TituloSeccion>
                {txt}
            </TituloSeccion>
            <ContenedorSeccionReporteStyled  height={ `calc(${height} - 50px)` }>
                {children}
            </ContenedorSeccionReporteStyled>
        </ContenedorSeccionReporteStyled>
    )
}