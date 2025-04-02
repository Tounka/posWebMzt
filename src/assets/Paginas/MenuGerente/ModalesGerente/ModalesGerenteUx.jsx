import styled from "styled-components"
import { ModalGenerico } from "../../../ComponentesGenerales/Modal"
import { useContextoMenuGerente } from "../../../Contextos/ContextoMenuGerente"

const ContenedorModal = styled.div`
    display: flex;
    flex-direction: column;

    width: 600px;
    height: 600px;
    max-width: 100%;
    max-height: 100%;

`
export const ModalGerenteUx = ({modalSeleccionado})=>{

    const {boolModalAdministrador, setBoolModalAdministrador} = useContextoMenuGerente();
    return(
        <ModalGenerico isOpen={boolModalAdministrador} onClose={() => setBoolModalAdministrador(false)}>
            <ContenedorModal>
                {modalSeleccionado}
            </ContenedorModal>
        </ModalGenerico>
    )
}