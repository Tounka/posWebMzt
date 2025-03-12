import { createContext, useContext, useEffect, useState } from "react";
import { categoriasProductos } from "../../Contextos/dataDesarollo.jsx";

const ContextoPaginaVenta = createContext();

export const ContextoPaginaVentaProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [descuento, setDescuento] = useState({tipo: "$", valor: 0});

    const [productosEnVenta, setProductosEnVenta] = useState(categoriasProductos);
    const [handleResetProductosActualizados, setHandleResetProductosActualizados] = useState(0);
    useEffect(() => {
        const productosActualizados = categoriasProductos.map(categoria => {
            return {
                ...categoria,
                items: categoria.items.map(item => {
                    return {
                        ...item,
                        cantidad: 0 
                    };
                })
            };
        });

        setProductosEnVenta(productosActualizados);
    }, [handleResetProductosActualizados]);

    return (
        <ContextoPaginaVenta.Provider value={{ setCarrito, carrito, productosEnVenta, setProductosEnVenta, setHandleResetProductosActualizados,descuento, setDescuento}}>
            {children}
        </ContextoPaginaVenta.Provider>
    );
};

export const useContextoPaginaVenta = () => {
    return useContext(ContextoPaginaVenta);
};