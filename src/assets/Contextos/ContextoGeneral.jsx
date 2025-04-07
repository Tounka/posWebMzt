import { createContext, useContext, useEffect, useState } from "react";
import { CajasDb, CategoriasDb, categoriasProductos, convertirProductos, DiasOperacionDb, inventariosDb, localDataIn, productos, ticketsDb, tratarProductos } from "./dataDesarollo.jsx";
import { useLocation, useNavigate } from "react-router";
import { obtenerCategorias } from "../dbConection/m-categoriasDb.js";
import { obtenerProductos } from "../dbConection/m-productos.js";
import { obtenerCaja } from "../dbConection/m-cajas.js";

const ContextoGeneral = createContext();

export const ContextoGeneralProvider = ({ children }) => {
    const [ubicacionPagina, setUbicacionPagina] = useState("/");
    const [user, setUser] = useState();
    const [localData, setLocalData] = useState({
        ubicacion: "Ubicacion del local",
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
        const fetchProductos = async () => {
            try {
                const data = await obtenerProductos();

                setCatalogov2(tratarProductos(data));
                setCatalogo(convertirProductos(tratarProductos(data)))
              
            } catch (error) {
                console.error("Error al obtener las categorías", error);
            }
        };
        const fetchObtenerCaja = async () =>{
            try{
               const caja= await obtenerCaja(localData.cajaId);
               console.log("aaa", caja)
               setCajaSelecionada(caja);
        
            }catch(error){
                console.log("error al conseguir el valor de la caja")
                console.log(error)
                console.log(localData)
            }
        }

        if(user ){
            fetchCategorias();
            fetchProductos();
            fetchObtenerCaja();
        }

        

    }, [user]);

    return (
        <ContextoGeneral.Provider value={{ diaEnOperacion, user, setUser, ubicacionPagina, setUbicacionPagina, catalogo, localData, tickets, inventarios, setRangoFechas, rangoFechas, catalogoV2, setLocalData, categorias, cajaSelecionada }}>
            {children}
        </ContextoGeneral.Provider>
    );
};

export const useContextoGeneral = () => {
    return useContext(ContextoGeneral);
};
