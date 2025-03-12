import { createContext, useContext, useEffect, useState } from "react";
import { categoriasProductos, inventariosDb, localDataIn, ticketsDiasDb, userData } from "./dataDesarollo.jsx";
import { useLocation, useNavigate } from "react-router";

const ContextoGeneral = createContext();

export const ContextoGeneralProvider = ({ children }) => {
    const [ubicacionPagina, setUbicacionPagina] = useState("/");
    const [user, setUser] = useState({
        nombre: "ramon",
        apellido: "marquez",
        rol: "administrador",
        correo: "luis@gmail.com",
        contraseña: "luis1234",
    });
    const [localData, setLocalData] = useState(localDataIn)
    const [catalogo, setCatalogo] = useState(categoriasProductos); //Cambiar a database 
    const [tickets, setTickets ]= useState(ticketsDiasDb);
    const [inventarios, setInventarios ]= useState(inventariosDb);
    const [rangoFechas, setRangoFechas]  = useState(null);

    return (
        <ContextoGeneral.Provider value={{ user, setUser, ubicacionPagina, setUbicacionPagina, catalogo, localData, tickets, inventarios,setRangoFechas,rangoFechas }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
