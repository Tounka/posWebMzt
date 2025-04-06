import { useEffect, useState } from "react"
import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts"
import { usuariosData } from "../../Contextos/dataDesarollo"
import { UsuariosUx } from "./UsuariosUx"
import { ObtenerUsuarios } from "../../dbConection/m-usuariosDb"
export const Usuarios = () =>{
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        (async () => {
            setUsuarios(await ObtenerUsuarios());
        })();
    }, [])
    return(
        <Contenedor100>
            <UsuariosUx  rows={usuarios} />
        </ Contenedor100>
    )
}