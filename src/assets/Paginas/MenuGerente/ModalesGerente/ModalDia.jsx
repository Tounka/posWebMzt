import styled from "styled-components"
import { ContenedorSeccionModal } from "../Componentes/SeccionModal"
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos"
import { useContextoMenuGerente } from "../../../Contextos/ContextoMenuGerente"
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral"
import { CajasDb } from "../../../Contextos/dataDesarollo"
import { obtenerFecha } from "../../../Fn/ObtenerFechaHora"
import { aperturarDia, cerrarDia, obtenerDiaEnOperacion } from "../../../dbConection/m-dias"
import { obtenerTodasLasCajas } from "../../../dbConection/m-cajas"
import { useEffect, useState } from "react"

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
    const { diaEnOperacion, setDiaEnOperacion } = useContextoGeneral();
    const { user } = useContextoGeneral();

    const handleClick = async () => {
        try {
            await aperturarDia()

            const nuevoDia = await obtenerDiaEnOperacion();
            setDiaEnOperacion(nuevoDia);
            alert("Dia aperturado con éxito");
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ContenedorSeccionModal titulo="Aperturar Dia">
            <ContenedorModalCaja>
                {
                    diaEnOperacion.diaAbierto ?

                        <TxtGenerico size="18px" color="var(--colorRojo)" > No es posible aperturar el dia pues ya esta abierto: ({obtenerFecha(diaEnOperacion.fecha)}). </TxtGenerico>
                        :
                        <>
                            <TxtGenerico size="18px" color="var(--colorRojo)" > Esta accion apertura el dia: ({obtenerFecha(new Date())}). </TxtGenerico>
                            <BtnAperurarCaja onClick={() =>handleClick()}>Aperturar Dia</BtnAperurarCaja>
                        </>
                }

            </ContenedorModalCaja>
        </ContenedorSeccionModal>
    )
}
export const ModalCerrarDia = () => {
    const { diaEnOperacion, setDiaEnOperacion } = useContextoGeneral();
    const { user } = useContextoGeneral();
    
    const [todasLasCajas, setTodasLasCajas] = useState([]);
    const [cajasAbiertas, setCajasAbiertas] = useState([]);
    
  
    useEffect(() => {
        const fetchCajas = async () => {
            const cajas = await obtenerTodasLasCajas();
            setTodasLasCajas(cajas);

            const abiertas = cajas
                .filter(caja => caja?.aperturada === true)
                .map(caja => caja.id);

            setCajasAbiertas(abiertas);
        };

        fetchCajas();
    }, []); 

    const handleClick = async () => {
        try {
             const diaActualizado = await cerrarDia();
             setDiaEnOperacion(diaActualizado)
            alert("Día cerrado con éxito");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContenedorSeccionModal titulo="Cerrar Día">
            <ContenedorModalCaja>
                {
                    diaEnOperacion?.diaAbierto ?
                        <>
                            {
                                cajasAbiertas?.length === 0 ?
                                    <>
                                        <TxtGenerico size="18px" color="var(--colorRojo)" >
                                            Esta acción cierra el día: {obtenerFecha(diaEnOperacion.fecha)}.
                                        </TxtGenerico>
                                        <BtnCerrarCaja onClick={handleClick}>Cerrar Día</BtnCerrarCaja>
                                    </>
                                    :
                                    <TxtGenerico size="18px" color="var(--colorRojo)" >
                                        No es posible cerrar el día pues las cajas (- {cajasAbiertas.join(", ")} -) continúan abiertas
                                    </TxtGenerico>
                            }
                        </>
                        :
                        <TxtGenerico size="18px" color="var(--colorRojo)" >
                            El día no está abierto.
                        </TxtGenerico>
                }
            </ContenedorModalCaja>
        </ContenedorSeccionModal>
    );
};