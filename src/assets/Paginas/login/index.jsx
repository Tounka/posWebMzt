import { useEffect, useState } from "react";
import { Contenedor100vdh } from "../../ComponentesGenerales/Genericos/layouts";
import { LoginUx } from "./loginUx";
import { useNavigate } from "react-router";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { BtnCofiguracion, ModalConfiguracion } from "./componentes/BtnConfiguracion";
import { Loading } from "../../ComponentesGenerales/Genericos/Loading";

export const Login = () => {
    const { user, setLocalData,diaEnOperacion } = useContextoGeneral();
    const [boolModalConfig, setBoolModalConfig] = useState(false);
    const Navigate = useNavigate();

    const handleClose = () => {
        setBoolModalConfig(false);
    };

    useEffect(() => {
        const savedCaja = Number(localStorage.getItem("cajaSeleccionada"));
        if (!isNaN(savedCaja) && savedCaja > 0) {
            setLocalData({
                ubicacion: "Ubicacion del local",
                sucursal: "Sucursal X",
                id: 1,
                cajaId: savedCaja,
            });
        }
    }, [setLocalData]);

    // Redirige si el usuario está autenticado
    useEffect(() => {
        if (user) {
            Navigate("/venta");
        }
    }, [user, Navigate]);
    //if(Object.keys(diaEnOperacion).length === 0){return(<Loading />);} 
    return (
        <Contenedor100vdh>
            <LoginUx />
            
            <BtnCofiguracion setBoolModalConfig={setBoolModalConfig} />
            <ModalConfiguracion onClose={handleClose} isOpen={boolModalConfig} />
        </Contenedor100vdh>
    );
};
