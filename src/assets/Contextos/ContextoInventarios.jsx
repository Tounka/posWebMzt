import { createContext, useContext, useEffect, useState } from "react";

const ContextoInventarios = createContext();

export const ContextoInventariosProvider = ({ children }) => {

    const [etiquetasAGenerar, setEtiquetasAGenerar]  = useState([]); 
    
    return (
        <ContextoInventarios.Provider value={{ etiquetasAGenerar, setEtiquetasAGenerar}}>
            {children}
        </ContextoInventarios.Provider>
    );
};

export const useContextoInventarios = () => {
    return useContext(ContextoInventarios);
};
