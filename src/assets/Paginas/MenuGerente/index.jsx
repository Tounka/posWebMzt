import { useEffect, useState } from "react";
import { Contenedor100 } from "../../ComponentesGenerales/Genericos/layouts";
import { LoginAdmin } from "./Login";
import { MenuGerenteUx } from "./MenuGerenteUx";

export const MenuGerente = () => {
    const [admin, setAdmin] = useState(null); // cambiar a auth con firebase


    return (
        <Contenedor100>
            {!admin ? (
                <LoginAdmin setAdmin={setAdmin} /> 
            ) : (
                <MenuGerenteUx />
            )}
        </Contenedor100>
    );
};
