import { Contenedor100 } from "../../ComponentesGenerales/layouts"
import { usuariosData } from "../../Contextos/dataDesarollo"
import { UsuariosUx } from "./UsuariosUx"
export const Usuarios = () =>{
    const rows = usuariosData;
    return(
        <Contenedor100>
            <UsuariosUx  rows={rows} />
        </ Contenedor100>
    )
}