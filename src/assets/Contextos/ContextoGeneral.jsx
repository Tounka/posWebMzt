import { createContext, useContext, useEffect, useState } from "react";
import { CajasDb, CategoriasDb, categoriasProductos, DiasOperacionDb, inventariosDb, localDataIn, productos, ticketsDb } from "./dataDesarollo.jsx";
import { useLocation, useNavigate } from "react-router";
import { obtenerCategorias } from "../dbConection/m-categoriasDb.js";

const ContextoGeneral = createContext();

export const ContextoGeneralProvider = ({ children }) => {
    const [ubicacionPagina, setUbicacionPagina] = useState("/");
    const [user, setUser] = useState();
    const [localData, setLocalData] = useState({    ubicacion: "Ubicacion del local",
        sucursal: "Sucursal X",
        id: 1,
        cajaId : 1,})
    const [catalogo, setCatalogo] = useState(categoriasProductos); 
    const [categorias, setCategorias] = useState([]);
    const [catalogoV2, setCatalogov2] = useState(productos)
    const [tickets, setTickets ]= useState(ticketsDb);
    const [inventarios, setInventarios ]= useState(inventariosDb);
    const [rangoFechas, setRangoFechas]  = useState(null);
   
    const [cajaSelecionada,setCajaSelecionada] = useState(    {
        id: 1,
        fecha: new Date("2025-02-29T08:00:00"),
        tickets: [],
        aperturada: true,
    })
    const [diaEnOperacion, setDiasEnOperacion] = useState(DiasOperacionDb)

    useEffect(() => {
        const fetchCategorias = async () => {
          try {
            const data = await obtenerCategorias();
            setCategorias(data); 
          } catch (error) {
            console.error("Error al obtener las categorías", error);
          }
        };
        
        fetchCategorias();
      }, []);
        
    return (
        <ContextoGeneral.Provider value={{ diaEnOperacion,user, setUser, ubicacionPagina, setUbicacionPagina, catalogo, localData, tickets, inventarios,setRangoFechas,rangoFechas, catalogoV2, setLocalData, categorias,cajaSelecionada }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
