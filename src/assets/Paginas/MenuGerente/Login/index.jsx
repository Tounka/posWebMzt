import { useEffect, useState } from "react";
import { Contenedor100vdh } from "../../../ComponentesGenerales/Genericos/layouts";
import { LoginAdminUx } from "./LoginAdminUx";
import { useNavigate } from "react-router";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";


export const LoginAdmin = ({setAdmin}) => {
    const { user, setLocalData } = useContextoGeneral();
    const Navigate = useNavigate();



 

    return (
        <Contenedor100vdh>
            <LoginAdminUx setAdmin={setAdmin} />
        </Contenedor100vdh>
    );
};
