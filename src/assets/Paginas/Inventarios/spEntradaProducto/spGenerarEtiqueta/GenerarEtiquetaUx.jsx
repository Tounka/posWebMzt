import styled from "styled-components";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";
import { useContextoInventarios } from "../../../../Contextos/ContextoInventarios";
import { TxtGenerico } from "../../../../ComponentesGenerales/titulos";

const ContenedorGenerarEtiquetaStyled = styled(Contenedor100)`
    padding: 30px 20px;
    align-items: start;
`

const ContenedorEtiquetas = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: solid 4px var(--colorPrincipal);
    min-height: 100%;
    position: relative;
    gap: 10px;
    `
const ContenedorEtiquetaStyled = styled.div`
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 60px 3fr 1fr;
    background-color:  var(--colorPrincipal);
    justify-content: center;
    align-items: center;
    
    
`

const Etiqueta = ({etiqueta}) =>{
    console.log(etiqueta)
    return(
        <ContenedorEtiquetaStyled>
            <TxtGenerico align= "center" color="white">
                {etiqueta.id}
            </TxtGenerico>

        </ContenedorEtiquetaStyled>
    )
}
export const GenerarEtiquetaUx = () => {

    const {etiquetasAGenerar, setEtiquetasAGenerar} = useContextoInventarios();

    return (
        <ContenedorGenerarEtiquetaStyled>
            <ContenedorEtiquetas>
                {etiquetasAGenerar.map((etiqueta, index) =>(

                    
                    <Etiqueta etiqueta={etiqueta} />
                )
                )}
             
            </ContenedorEtiquetas>
        </ContenedorGenerarEtiquetaStyled>
    );
};