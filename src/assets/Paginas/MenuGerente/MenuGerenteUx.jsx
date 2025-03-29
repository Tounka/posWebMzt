import styled from "styled-components"
import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts"
import { BtnMenuGerente } from "./Componentes/BtnMenuGerente"


const ContenedorGrid = styled(Contenedor100)`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(4,1fr);

`
const ContenedorTopMenuGerente =  styled.div`
    width: 100%;
    background-color: var(--colorPrincipal);
    padding: 20px;
    text-align: center;
    font-weight: bold;
    font-size:  34px;
`

const ContenedorMenuGerente = styled(Contenedor100)`
    align-items: start;
    flex-direction: column;
`
export const MenuGerente = () =>{
    return(
        <ContenedorMenuGerente >
           <ContenedorTopMenuGerente>Menu Administrador</ContenedorTopMenuGerente>

           <ContenedorGrid>
                <BtnMenuGerente position={["1/2", "auto"]} />
           </ContenedorGrid>
        </ ContenedorMenuGerente>
    )
}