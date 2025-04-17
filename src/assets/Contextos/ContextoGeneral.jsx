import { createContext, useContext, useEffect, useState } from "react";
import { CajasDb, CategoriasDb, categoriasProductos, convertirProductos, DiasOperacionDb, inventariosDb, localDataIn, productos, ticketsDb, tratarProductos } from "./dataDesarollo.jsx";
import { useLocation, useNavigate } from "react-router";
import { obtenerCategorias } from "../dbConection/m-categoriasDb.js";
import { obtenerProductos } from "../dbConection/m-productos.js";
import { obtenerCaja } from "../dbConection/m-cajas.js";
import { obtenerDiaEnOperacion } from "../dbConection/m-dias.js";

const ContextoGeneral = createContext();

export const ContextoGeneralProvider = ({ children }) => {
    const [ubicacionPagina, setUbicacionPagina] = useState("/");
    const [user, setUser] = useState();
    const [localData, setLocalData] = useState({
        ubicacion: "Mazatlan Sinaloa",
        sucursal: "Sucursal X",
        id: 1,
        cajaId: 1,
    })
    const [catalogo, setCatalogo] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [catalogoV2, setCatalogov2] = useState([])
    const [tickets, setTickets] = useState(ticketsDb);
    const [inventarios, setInventarios] = useState(inventariosDb);
    const [rangoFechas, setRangoFechas] = useState(null);

    const [cajaSelecionada, setCajaSelecionada] = useState({})
    const [cajaEnUso, setCajaEnUso] = useState({})
    const [diaEnOperacion, setDiaEnOperacion] = useState({})

    useEffect(() => {
        const obtenerTodo = async () => {
            try {
                const dia = await obtenerDiaEnOperacion();
                setDiaEnOperacion(dia);
    
                const categoriasData = await obtenerCategorias();
                setCategorias(categoriasData);
    
                const productosData = await obtenerProductos();
                const productosTratados = tratarProductos(productosData);
                setCatalogov2(productosTratados);
                setCatalogo(convertirProductos(productosTratados));
    
                const caja = await obtenerCaja(localData.cajaId);
                setCajaEnUso(caja);
            } catch (error) {
                console.error("Error al obtener información inicial:", error);
            }
        };
    
        if (user) {
            obtenerTodo();
        }
    }, [user]);

    return (
        <ContextoGeneral.Provider value={{ diaEnOperacion, user, setUser, ubicacionPagina, setUbicacionPagina, catalogo, localData, tickets, inventarios, setRangoFechas, rangoFechas, catalogoV2, setLocalData, categorias, cajaSelecionada,cajaEnUso,setDiaEnOperacion, setCajaEnUso }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
