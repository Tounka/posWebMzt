import { createContext, useContext, useEffect, useState } from "react";
import { CajasDb } from "./dataDesarollo";

const ContextoMenuGerente = createContext();

export const ContextoMenuGerenteProvider = ({ children }) => {

    const [boolModalAdministrador, setBoolModalAdministrador] = useState(false);
    const [modalSeleccionado, setModalSeleccionado] = useState();
    const [cajaSeleccionada, setCajaSeleccionada] = useState(CajasDb[0]);
    return (
        <ContextoMenuGerente.Provider value={{ boolModalAdministrador, setBoolModalAdministrador,modalSeleccionado,setModalSeleccionado, cajaSeleccionada}}>
            {children}
        </ContextoMenuGerente.Provider>
    );
};

export const useContextoMenuGerente = () => {
    return useContext(ContextoMenuGerente);
};
