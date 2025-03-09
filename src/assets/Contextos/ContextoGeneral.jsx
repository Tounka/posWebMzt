import { createContext, useContext, useState } from "react";
import { categoriasProductos, inventariosDb, localDataIn, ticketsDiasDb, userData } from "./dataDesarollo.jsx";

const ContextoGeneral = createContext();

export const ContextoGeneralProvider = ({ children }) => {
    const [ubicacionPagina, setUbicacionPagina] = useState("/");
    const [user, setUser] = useState(userData);
    const [localData, setLocalData] = useState(localDataIn)
    const [catalogo, setCatalogo] = useState(categoriasProductos); //Cambiar a database 
    const [tickets, setTickets ]= useState(ticketsDiasDb);
    const [inventarios, setInventarios ]= useState(inventariosDb);

    return (
        <ContextoGeneral.Provider value={{ user, setUser, ubicacionPagina, setUbicacionPagina, catalogo, localData, tickets, inventarios }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
