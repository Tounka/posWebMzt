import { createContext, useContext, useEffect, useState } from "react";
import { CajasDb } from "./dataDesarollo";

const ContextoMenuGerente = createContext();

export const ContextoMenuGerenteProvider = ({ children }) => {

    const [boolModalAdministrador, setBoolModalAdministrador] = useState(false);
    const [modalSeleccionado, setModalSeleccionado] = useState();
    
    return (
        <ContextoMenuGerente.Provider value={{ boolModalAdministrador, setBoolModalAdministrador,modalSeleccionado,setModalSeleccionado, }}>
            {children}
        </ContextoMenuGerente.Provider>
    );
};

export const useContextoMenuGerente = () => {
    return useContext(ContextoMenuGerente);
};
