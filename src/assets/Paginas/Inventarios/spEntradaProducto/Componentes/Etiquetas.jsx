import styled from "styled-components";
import { FaGreaterThan } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { TxtGenerico } from "../../../../ComponentesGenerales/titulos";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";
import { useContextoPaginaVenta } from "../../../ventas/ContextoVenta";
import { useNavigate } from "react-router";
import { useContextoInventarios } from "../../../../Contextos/ContextoInventarios";
// Contenedores principales
const ContenedorCarritoStyled = styled.div`
    display: grid;
    grid-template-rows: auto 120px;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 10px 10px 20px 10px;
    overflow: hidden;
`;
const ContenedorBottomTotal = styled.div`
    width: 100%;
    height: 100%;
    display: grid;



`
const ContenedorItemsCarrito = styled(Contenedor100)`
    flex-direction: column;
    justify-content: start;
    max-width: 100%;
    gap: 10px;
    overflow-y: auto;
    padding: 5px;
`;

const ContenedorTotal = styled.div`
    border: solid 2px var(--colorBlanco);
    border-radius: 20px;
    height: 100%;
    width: 100%;
    display: grid;
    overflow: hidden;
    grid-template-columns: 3fr 1fr;
`;

const ContenedorItemCarritoStyled = styled.div`
    width: 100%;
    min-height: 50px;
    display: grid;
    border: solid 2px var(--colorBlanco);
    border-radius: 20px;
    color: var(--colorBlanco);
    box-sizing: border-box;
    overflow: hidden;
    transition: min-height .2s ease-in-out;

    &:nth-child(even) {
        background-color: var(--colorSecundario);
    }
`;

// Elementos del carrito
const ContenedorTop = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 10px;
  
    div {
        :nth-child(1){
        text-align: end;
        }
        display: flex;
        align-items: center;
        gap: 10px;
        p{
            width: 100%;
        }

    }
`;

const BtnAccionDesglosar = styled.div`
    font-size: 24px;
    color: var(--colorBlanco);
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    transition: transform .2s ease-in-out;
    

`;





const ItemCarrito = ({ idCarrito, item }) => {
    
    const {setEtiquetasAGenerar} = useContextoInventarios();


    const handleChange = (e) => {
        setEtiquetasAGenerar(prevEtiquetas =>
            prevEtiquetas.map((producto, index) =>
                index === idCarrito ? { ...producto} : producto
            )
        );
    };



    return (
        <ContenedorItemCarritoStyled >
            <ContenedorTop>
               
                    <BtnAccionDesglosar >
                        <FaGreaterThan />
                    </BtnAccionDesglosar>
                    <TxtGenerico size="14px">{item.nombre}</TxtGenerico>
                    <TxtGenerico size="14px">{item.id}</TxtGenerico>
             
        
            </ContenedorTop>
   

        </ContenedorItemCarritoStyled>
    );
};

const ContenedorTxtCarrito = styled(Contenedor100)`
    flex-direction: column;
    justify-content: center;
    
    div {
        width: 100%;
        display: grid;
        grid-template-columns: 80px 50px 2fr;
        gap: 10px;
        :nth-child(1) {
            text-align: end;
        }
    }
`;

const ConstBtnSubmit = styled.button`
    border: none;
    background-color: var(--colorBlanco);
    cursor: pointer;
    color: var(--colorPrincipal);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover svg {
        transform: translateX(10px);
        transition: transform .2s ease;
    }
    
    svg {
        font-size: 28px;
        transition: transform .2s ease;
    }
`;

const TotalEtiqueta = ({ total = 0, handleClick }) => {

    return (
        <ContenedorTotal>
            <ContenedorTxtCarrito>
                <div><TxtGenerico weight="normal">Etiquetas:</TxtGenerico><TxtGenerico weight="bold">{total}</TxtGenerico> </div>
            </ContenedorTxtCarrito>
            <ConstBtnSubmit onClick={() => handleClick()}><GrCaretNext /></ConstBtnSubmit>
        </ContenedorTotal>
    );
}

export const Etiquetas = () => {
    const { carrito } = useContextoPaginaVenta();
    const {etiquetasAGenerar, setEtiquetasAGenerar} = useContextoInventarios();
    const Navigate = useNavigate();
 
    const total = etiquetasAGenerar.length;

    const handleClick = () => {
        if (total <= 0) {
            console.log("Ocupas agregar items al carrito");

        } else {
            
            Navigate("/inventario/entrada-producto/generar-etiqueta");
        }

    }

    return (
        <ContenedorCarritoStyled>
            <ContenedorItemsCarrito>
                {etiquetasAGenerar.length === 0 ?
                    <TxtGenerico weight="normal" >(Da click en las etiquetas a generar)</TxtGenerico> :
                    etiquetasAGenerar.map((item, index) => <ItemCarrito key={index} idCarrito={index} item={item} />)
                }
            </ContenedorItemsCarrito>

            <ContenedorBottomTotal>

                <TotalEtiqueta  total={total} handleClick={handleClick} />

            </ContenedorBottomTotal>
        </ContenedorCarritoStyled>
    );
}
