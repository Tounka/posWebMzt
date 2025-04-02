import { useEffect, useState } from "react";
import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts";
import { LoginAdmin } from "./Login";
import { MenuGerenteUx } from "./MenuGerenteUx";
import { ContextoMenuGerenteProvider, useContextoMenuGerente } from "../../Contextos/ContextoMenuGerente";
import { ModalesGerente } from "./ModalesGerente";
import { ModalArqueo } from "./ModalesGerente/ModalArqueo";

export const MenuGerente = () => {
    const [admin, setAdmin] = useState(null); // cambiar a auth con firebase
    

    return (
        <ContextoMenuGerenteProvider>
            <Contenedor100>
                {!admin ? (
                    <LoginAdmin setAdmin={setAdmin} />
                ) : (
                    <MenuGerenteUx />
                )}
            </Contenedor100>


            <ModalesGerente />
        </ContextoMenuGerenteProvider>
    );
};
