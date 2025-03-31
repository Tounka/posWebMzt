import styled from "styled-components"
import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts"
import { BtnMenuGerente } from "./Componentes/BtnMenuGerente"


const ContenedorGrid = styled(Contenedor100)`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(4,1fr);
    padding: 10px;

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
export const MenuGerenteUx = () =>{
    return(
        <ContenedorMenuGerente >
           <ContenedorTopMenuGerente>Menu Administrador</ContenedorTopMenuGerente>

           <ContenedorGrid>
                <BtnMenuGerente txt="Arqueo" position={["1/2", "auto"]} />
                <BtnMenuGerente txt="Retiro" position={["2/3", "auto"]} />
                
                <BtnMenuGerente txt="Aperturar Caja" position={["4/5", "3/4"]} />
                <BtnMenuGerente txt="Cerrar Caja" position={["5/6", "3/4"]} />
                <BtnMenuGerente txt="Aperturar Dia" position={["4/5", "4/5"]} />
                <BtnMenuGerente txt="Cerrar Dia" position={["5/6", "4/5"]} />
           </ContenedorGrid>
        </ ContenedorMenuGerente>
    )
}