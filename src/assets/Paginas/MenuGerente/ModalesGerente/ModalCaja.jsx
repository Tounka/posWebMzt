import styled from "styled-components"
import { ContenedorSeccionModal } from "../Componentes/SeccionModal"
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos"
import { useContextoMenuGerente } from "../../../Contextos/ContextoMenuGerente"
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral"

const ContenedorModalCaja = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: start;
    align-items: center;
    gap: 20px;
`



const BtnAperurarCaja = styled.button`
    width: 80%;
    height: 80px;
    border: none;
    border-radius: 20px;
    background-color: var(--colorPrincipal);
    color: white;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`
const BtnCerrarCaja = styled(BtnAperurarCaja)`
    background-color: var(--colorRojo);
`

export const ModalAperturarCaja = () => {
    const { cajaSeleccionada } = useContextoMenuGerente();
    const { user } = useContextoGeneral();



    return (
        <ContenedorSeccionModal titulo="Aperturar Caja">
            <ContenedorModalCaja>
                {
                    cajaSeleccionada.aperturada ?

                        <TxtGenerico size="18px" color="var(--colorRojo)" > No es posible aperturar la caja pues ya esta abierta. </TxtGenerico>
                        :
                        <>
                            <TxtGenerico size="18px" color="var(--colorRojo)" > Esta accion apertura la caja con el usuario: {user.nombre}. </TxtGenerico>
                            <BtnAperurarCaja>Aperturar Caja</BtnAperurarCaja>
                        </>
                }

            </ContenedorModalCaja>
        </ContenedorSeccionModal>
    )
}
export const ModalCerrarCaja = () => {
    const { cajaSeleccionada } = useContextoMenuGerente();
    const { user } = useContextoGeneral();



    return (
        <ContenedorSeccionModal titulo="Cerrar Caja">
            <ContenedorModalCaja>
                {
                    cajaSeleccionada.aperturada ?
                        <>
                            <TxtGenerico size="18px" color="var(--colorRojo)" > Esta accion cierra la caja del usuario: {user.nombre}. </TxtGenerico>
                            <BtnCerrarCaja>Cerrar Caja</BtnCerrarCaja>
                        </>
                        :
                        <TxtGenerico size="18px" color="var(--colorRojo)" > La caja no esta abierta. </TxtGenerico>
                }

            </ContenedorModalCaja>
        </ContenedorSeccionModal>
    )
}