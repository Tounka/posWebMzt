import styled from "styled-components";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos"
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral"
import { obtenerFecha } from "../../../Fn/ObtenerFechaHora";

const ContenedorTxtHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InformacionOperacion = () => {
    const { diaEnOperacion } = useContextoGeneral();

    if (!diaEnOperacion) {
        return null; 
    }

    const fechaEnOperacion = obtenerFecha(diaEnOperacion.fecha);
    const fechaHoy = obtenerFecha(new Date()); 
    const TxtPrincipal = () => {
        if (!diaEnOperacion.diaAbierto) {
            return "Es necesario aperturar el día antes de iniciar la venta";
        }
        return `Día en operación: ${fechaEnOperacion}`;
    };

    const TxtPrincipalSecundario = () => {
        if (diaEnOperacion.diaAbierto && fechaEnOperacion !== fechaHoy) {
            return `Se recomienda cerrar el día en operación`;
        }
        return ""; // Retornamos cadena vacía en lugar de `undefined`
    };

    return (
        <ContenedorTxtHead>
            <TxtGenerico color="white" size="24px" align="center">
                {TxtPrincipal()}
            </TxtGenerico>
            {TxtPrincipalSecundario() && (
                <TxtGenerico color="white" size="16px" align="center">
                    {TxtPrincipalSecundario()}
                </TxtGenerico>
            )}
        </ContenedorTxtHead>
    );
};
