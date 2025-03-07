import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { GenerarTicketUx } from "./GenerarTicketUx";


export const GenerarTicket = () =>{
    const {catalogo} = useContextoGeneral();

    return(
        <Contenedor100>
                <GenerarTicketUx  />
        </ Contenedor100>
    )
}