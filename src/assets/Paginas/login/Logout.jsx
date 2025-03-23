import { useEffect } from "react"
import { Contenedor100vdh } from "../../ComponentesGenerales/Genericos/layouts"
import { useAuth } from "../../Contextos/ContextoAuth"
export const Logout = () =>{
    const {logout} = useAuth()

    useEffect(() =>{
        logout();
    }, [])
    return(
        <Contenedor100vdh>
            
        </ Contenedor100vdh>
    )
}