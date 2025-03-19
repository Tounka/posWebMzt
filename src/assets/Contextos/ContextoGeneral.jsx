import { createContext, useContext, useEffect, useState } from "react";
import { categoriasProductos, inventariosDb, localDataIn, productos, ticketsDiasDb, userData } from "./dataDesarollo.jsx";
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
    const [catalogoV2, setCatalogov2] = useState(productos)
    const [tickets, setTickets ]= useState(ticketsDiasDb);
    const [inventarios, setInventarios ]= useState(inventariosDb);
    const [rangoFechas, setRangoFechas]  = useState(null);



    
    return (
        <ContextoGeneral.Provider value={{ user, setUser, ubicacionPagina, setUbicacionPagina, catalogo, localData, tickets, inventarios,setRangoFechas,rangoFechas, catalogoV2 }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
