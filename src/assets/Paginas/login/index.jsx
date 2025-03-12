import { useEffect } from "react";
import { Contenedor100vdh } from "../../ComponentesGenerales/layouts"
import { LoginUx } from "./loginUx"
import { useNavigate } from "react-router";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
export const Login = () =>{
    const {user} = useContextoGeneral();
    const Navigate = useNavigate();
    useEffect(() =>{
        if(user){
            Navigate("/")
        }
    },[])
    return(
        <Contenedor100vdh>
            <LoginUx />
        </ Contenedor100vdh>
    )
}