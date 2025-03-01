import { createContext, useContext, useState } from "react";
import { categoriasProductos } from "./dataDesarollo.jsx";

const ContextoGeneral = createContext();

export const ContextoGeneralProvider = ({ children }) => {
    const [ubicacionPagina, setUbicacionPagina] = useState("/");
    const [user, setUser] = useState(null);
    const [catalogo, setCatalogo] = useState(categoriasProductos); //Cambiar a database 

    return (
        <ContextoGeneral.Provider value={{ user, setUser, ubicacionPagina, setUbicacionPagina, catalogo }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
