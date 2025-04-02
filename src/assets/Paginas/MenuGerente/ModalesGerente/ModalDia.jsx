import styled from "styled-components"
import { ContenedorSeccionModal } from "../Componentes/SeccionModal"
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos"
import { useContextoMenuGerente } from "../../../Contextos/ContextoMenuGerente"
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral"
import { CajasDb } from "../../../Contextos/dataDesarollo"
import { obtenerFecha } from "../../../Fn/ObtenerFechaHora"

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

export const ModalAperturarDia = () => {
    const { diaEnOperacion } = useContextoGeneral();
    const { user } = useContextoGeneral();



    return (
        <ContenedorSeccionModal titulo="Aperturar Dia">
            <ContenedorModalCaja>
                {
                    diaEnOperacion.diaAbierto ?

                        <TxtGenerico size="18px" color="var(--colorRojo)" > No es posible aperturar el dia pues ya esta abierto: ({obtenerFecha(diaEnOperacion.fecha)}). </TxtGenerico>
                        :
                        <>
                            <TxtGenerico size="18px" color="var(--colorRojo)" > Esta accion apertura el dia: ({obtenerFecha(new Date())}). </TxtGenerico>
                            <BtnAperurarCaja>Aperturar Dia</BtnAperurarCaja>
                        </>
                }

            </ContenedorModalCaja>
        </ContenedorSeccionModal>
    )
}
export const ModalCerrarDia = () => {
    const { diaEnOperacion  } = useContextoGeneral();
    const { user } = useContextoGeneral();

    const TodasLasCajas = CajasDb;
    const CajasAbiertas = TodasLasCajas.filter(caja => caja.aperturada ===  true ).map(caja =>caja.id);
    console.log(CajasAbiertas);
    return (
        <ContenedorSeccionModal titulo="Cerrar Dia">
            <ContenedorModalCaja>
                {
                    diaEnOperacion.diaAbierto ?
                        <>
                        {
                            CajasAbiertas.length === 0 ?
                            <>
                            <TxtGenerico size="18px" color="var(--colorRojo)" > Esta accion cierra el dia: {obtenerFecha(diaEnOperacion.fecha)}. </TxtGenerico>
                            <BtnCerrarCaja>Cerrar Dia</BtnCerrarCaja>
                            </>
                            :
                            <TxtGenerico size="18px" color="var(--colorRojo)" > No es posible cerrar el dia pues las cajas (- {CajasAbiertas.join(", ")} -) continuan abiertas </TxtGenerico>

                        }
                        </>
                        :
                        <TxtGenerico size="18px" color="var(--colorRojo)" > El dia no esta abierto. </TxtGenerico>
                }

            </ContenedorModalCaja>
        </ContenedorSeccionModal>
    )
}