import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts"
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { Bloqueador } from "./componentes/ComponenteBloqueador";
import { useContextoPaginaVenta } from "./ContextoVenta";

import { VentasUx } from "./ventasUx"
export const Ventas = () =>{
    const {catalogo} = useContextoGeneral();
    const {productosEnVenta} = useContextoPaginaVenta();
    const {diaEnOperacion,cajaSelecionada, localData} = useContextoGeneral();
    
    
    const componenteARenderizar = () =>{
        if(diaEnOperacion.diaAbierto){
            if(cajaSelecionada.aperturada ){
                return (<VentasUx catalogo={productosEnVenta} />)

            }else{
                return(<Bloqueador txt="Es necesario aperturar la caja antes de comenzar la venta." />)
            }
        }else{
            return(<Bloqueador txt="Es necesario aperturar el día antes de comenzar la venta." />)
            
        }
    }
    return(
        <Contenedor100>
            {componenteARenderizar()}
        </ Contenedor100>
    )
}