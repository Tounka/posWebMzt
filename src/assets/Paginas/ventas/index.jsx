import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts"
import { TxtGenerico } from "../../ComponentesGenerales/Genericos/titulos";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { Bloqueador } from "./componentes/ComponenteBloqueador";
import { useContextoPaginaVenta } from "./ContextoVenta";

import { VentasUx } from "./ventasUx"
export const Ventas = () => {
    const { catalogo, diaEnOperacion, cajaEnUso, localData } = useContextoGeneral();
    const { productosEnVenta } = useContextoPaginaVenta();

    
    if (!diaEnOperacion || !cajaEnUso) {
        return <Contenedor100><TxtGenerico color="var(--colorPrincipal)">Cargando datos...</TxtGenerico> </Contenedor100>;
    }

    const componenteARenderizar = () => {
        if (diaEnOperacion.diaAbierto) {
            if (cajaEnUso.aperturada) {
                return <VentasUx catalogo={productosEnVenta} />;
            } else {
                return <Bloqueador txt="Es necesario aperturar la caja antes de comenzar la venta." />;
            }
        } else {
            return <Bloqueador txt="Es necesario aperturar el día antes de comenzar la venta." />;
        }
    };

    return (
        <Contenedor100>
            {componenteARenderizar()}
        </Contenedor100>
    );
};