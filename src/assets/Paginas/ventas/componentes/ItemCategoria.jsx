import styled from "styled-components"
import { TxtGenerico } from "../../../ComponentesGenerales/titulos"
import { ContenedorGenerico } from "../../../ComponentesGenerales/contendores"
import { PiHandSoapBold } from "react-icons/pi";
import { useEffect, useMemo, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { useContextoPaginaVenta } from "../ContextoVenta";

 const ContenedorItemCategoria = styled.button`
    height: 100px;
    width: 120px;
    display: grid;
    padding: 0px 0;
    border-radius: 20px;
    grid-template-rows: 3fr 1fr;
    box-sizing: border-box;
    &:hover{
        background-color: var(--colorVerde);
    }

    transition: backgrodun-color .2s ease;
    cursor: pointer;
    border: solid 2px var(--colorPrincipal);
    `
 

const ContenedorItemProducto = styled.div`
        height: 160px;
        width: 160px;
        display: grid;
        grid-template-rows: 5fr 2fr 3fr;
        border-radius: 20px;
        padding: 5px 0;
        justify-content: center;
        align-items: start;
        background-color: var(--colorBlanco);
        user-select: none;
        cursor: default ;

        border: dashed 2px var(--colorPrincipal);
`

export const ItemCategoria = ({icon=<PiHandSoapBold />,txt, catalogo, setCatalogoSeleccionado,index, categoria}) =>{

    const handleClick = () =>{
        setCatalogoSeleccionado(catalogo[index]);
    }

    return(
        <ContenedorItemCategoria onClick={() => handleClick()}>
            <ContenedorGenerico width= "120px" align= "end" >
                <TxtGenerico color="var(--colorPrincipal)" line= ".8"  size="58px" > {icon} </TxtGenerico>
            </ContenedorGenerico>

            <ContenedorGenerico width= "120px" >
                <TxtGenerico size="14px" color="var(--colorPrincipal)" line= ".8"> {txt} </TxtGenerico>
            </ContenedorGenerico>

        </ContenedorItemCategoria>
    )
}

const ControlUnidadesStyled = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 30px;
    background-color: ${props => (Number(props.unidades) == 0 ? "var(--colorRojo)" : "var(--colorVerde)")};

`
const BtnMasUnidadesStyled = styled.button`

    grid-column: 3/4;
    color: var(--colorBlanco);
    font-size: 32px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const BtnMenosUnidadesStyled = styled(BtnMasUnidadesStyled)`

    grid-column: 1/2;


    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`
const ContenedorTxtStyled = styled(Contenedor100)`
    color: var(--colorBlanco);
    font-weight: bold;
    font-size: 20px;
    
    `
const ControlUnidades = ({handleClickPlus, unidades,handleClickLess}) =>{
    return(
        <ControlUnidadesStyled unidades={unidades}>
            {unidades >= 1
                ?
                <>
                 <BtnMenosUnidadesStyled onClick={()=> handleClickLess()}>
                    <FaMinus />
                </BtnMenosUnidadesStyled>
                <ContenedorTxtStyled>
                    ({unidades})
                </ContenedorTxtStyled>
                </>
                :
                <>
                </>
            }
           
   
           <BtnMasUnidadesStyled onClick={() =>handleClickPlus()}>
                <FaPlus />
           </BtnMasUnidadesStyled>
        </ControlUnidadesStyled>
    )
}

export const ItemProducto = ({ producto }) => {
    const { setProductosEnVenta, productosEnVenta, setCarrito, carrito } = useContextoPaginaVenta();
    const [cantidad, setCantidad] = useState(producto.cantidad || 0);
    let productoEnCarrito = carrito.find(item => item.id === producto.id);
    if(productoEnCarrito == undefined){
        productoEnCarrito = {
            cantidad: 0
        }
    }
    useEffect(() => {
        const productoEnVenta = productosEnVenta
            .flatMap(categoria => categoria.items)
            .find(item => item.id === producto.id);

        setCantidad(productoEnVenta ? productoEnVenta.cantidad : 0);
    }, [productosEnVenta, producto.id]);

    const handleClickPlus = () => {
        setProductosEnVenta(prevProductosEnVenta => 
            prevProductosEnVenta.map(categoria => ({
                ...categoria,
                items: categoria.items.map(item => 
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                )
            }))
        );

        setCarrito(prevCarrito => {
            const existeProducto = prevCarrito.find(item => item.id === producto.id);
            if (existeProducto) {
                return prevCarrito.map(item =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    const handleClickLess = () => {
        setProductosEnVenta(prevProductosEnVenta => 
            prevProductosEnVenta.map(categoria => ({
                ...categoria,
                items: categoria.items.map(item => 
                    item.id === producto.id ? { ...item, cantidad: Math.max(item.cantidad - 1, 0) } : item
                )
            }))
        );

        setCarrito(prevCarrito => {
            const existeProducto = prevCarrito.find(item => item.id === producto.id);
            if (existeProducto) {
                if (existeProducto.cantidad > 1) {
                    return prevCarrito.map(item =>
                        item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
                    );
                } else {
                    return prevCarrito.filter(item => item.id !== producto.id);
                }
            }
            return prevCarrito;
        });
    };

    return (
        <ContenedorItemProducto id={producto.id} >
            <ContenedorGenerico width="150px" align="center" onClick={() => handleClickPlus()}>
                <TxtGenerico color="var(--colorPrincipal)" line=".8" size="58px" >
                    {producto.icon || <PiHandSoapBold />}
                </TxtGenerico>
            </ContenedorGenerico>

            <ContenedorGenerico width="150px" onClick={() => handleClickPlus()}>
                <TxtGenerico color="var(--colorPrincipal)" line=".8" align="center">
                    {producto.nombre}
                </TxtGenerico>
            </ContenedorGenerico>
            
            <ControlUnidades 
                unidades={productoEnCarrito?.cantidad} 
                handleClickPlus={handleClickPlus} 
                handleClickLess={handleClickLess}  
            />
        </ContenedorItemProducto>
    );
};