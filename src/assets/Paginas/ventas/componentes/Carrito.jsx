import styled from "styled-components";
import { FaGreaterThan } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { Contenedor100 } from "../../../ComponentesGenerales/Genericos/layouts";
import { useContextoPaginaVenta } from "../ContextoVenta";
import { useNavigate } from "react-router";
import { Label } from "recharts";
import { DescuentoCarrito } from "./DescuentoCarrito";

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

    grid-template-rows: 35% 65%;
    gap: 10px;

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
    min-height: ${({ isDesglozado }) => (isDesglozado ? "100px" : "50px")};
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
    grid-template-columns: 3fr 1fr;
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
const ContenedorNumeroTop = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
`

const BtnAccionDesglosar = styled.button`
    font-size: 24px;
    color: var(--colorBlanco);
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    transition: transform .2s ease-in-out;
    
    transform: ${({ isDesglozado }) => (isDesglozado ? "rotate(90deg)" : "rotate(0deg)")};
`;

const ContenedorBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 50px;
    padding: 0 10px 10px;
    gap: 10px;
`;

// Input de cantidad
const ContendorLabelCantidad = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    font-size: 24px;
    border-radius: 15px;
    overflow: hidden;
    gap: 5px;
    justify-content: center;
`;

const InputLabel = styled.label`
    background-color: var(--colorBlanco);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ContenedorInputCantidad = styled.input`
    background-color: var(--colorBlanco);
    width: 100%;
    height: 100%;
    padding: 10px;
    border: none;

    
`;



const InputCantidad = ({ icono, value, handleChange }) => {
    const handleKeyDown = (e) => {
        // Permitir solo números y teclas de control
        if (!/[\d\b]/.test(e.key) && !["Backspace", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleInput = (e) => {
        // Evitar valores negativos y limitar a 3 dígitos
        e.target.value = Math.max(1, Math.min(999, Number(e.target.value)));
    };

    return (
        <ContendorLabelCantidad>
            <InputLabel htmlFor={icono}>
                <TxtGenerico color="var(--colorPrincipal)">{icono}</TxtGenerico>
            </InputLabel>
            <ContenedorInputCantidad
                type="number"
                min={0}
                max={999}
                id={icono}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
            />
        </ContendorLabelCantidad>
    );
};

const ItemCarrito = ({ idCarrito, item }) => {
    const { setCarrito, carrito } = useContextoPaginaVenta();
    const handleChange = (e) => {
        const nuevaCantidad = Number(e.target.value);

        setCarrito(prevCarrito =>
            prevCarrito.map((producto, index) =>
                index === idCarrito ? { ...producto, cantidad: nuevaCantidad } : producto
            )
        );
    };

    let total = item.cantidad * item.precio || 0;
    const [isDesglozado, setIsDesglozado] = useState(false);
    return (
        <ContenedorItemCarritoStyled isDesglozado={isDesglozado}>
            <ContenedorTop>
                <div>
                    <BtnAccionDesglosar isDesglozado={isDesglozado} onClick={() => setIsDesglozado(prev => !prev)}>
                        <FaGreaterThan />
                    </BtnAccionDesglosar>
                    <TxtGenerico size="14px">{item.nombre}</TxtGenerico>
                </div>
                <ContenedorNumeroTop>
                    <TxtGenerico size="14px">
                        ({item.cantidad})
                    </TxtGenerico>
                    <TxtGenerico size="14px">
                        ${total}
                    </TxtGenerico>
                </ContenedorNumeroTop>
            </ContenedorTop>
            {isDesglozado && (
                <ContenedorBottom>
                    <InputCantidad
                        icono="#"
                        value={carrito[idCarrito].cantidad}
                        handleChange={handleChange} // Pasamos la referencia correcta
                    />

                </ContenedorBottom>
            )}

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

const TotalCarrito = ({ total = 0, totalVenta = "$200", handleClick }) => {
    const {descuento} = useContextoPaginaVenta();


    const calcularDescuento = (totalVenta) =>{
        let valorDescuento = 0;
        if(descuento.tipo === '%' ){
            valorDescuento = totalVenta * (descuento.valor / 100);
            valorDescuento = valorDescuento.toFixed(2)
        }else{
            valorDescuento = descuento.valor;
        }

        return(valorDescuento);
    }
    return (
        <ContenedorTotal>
            <ContenedorTxtCarrito>
                <div><TxtGenerico weight="normal">Productos:</TxtGenerico><TxtGenerico weight="bold">{total}</TxtGenerico> <TxtGenerico align= "center" weight="bold">desc:</TxtGenerico></div>
                <div><TxtGenerico weight="normal">Venta:</TxtGenerico><TxtGenerico weight="bold">{totalVenta}</TxtGenerico>  <TxtGenerico align= "center" weight="bold">${calcularDescuento(totalVenta)}</TxtGenerico></div>
                
            </ContenedorTxtCarrito>
            <ConstBtnSubmit onClick={() => handleClick()}><GrCaretNext /></ConstBtnSubmit>
        </ContenedorTotal>
    );
}

export const Carrito = () => {
    const { carrito } = useContextoPaginaVenta();

    const Navigate = useNavigate();
    const totalVenta = carrito.reduce((acumulador, item) => {
        return acumulador + (item.cantidad * item.precio);
    }, 0);
    const total = carrito.reduce((acumulador, item) => {
        return acumulador + (item.cantidad);
    }, 0);

    const handleClick = () => {
        if (total <= 0) {
            console.log("Ocupas agregar items al carrito");

        } else {
            console.log(carrito);
            Navigate("/venta/generar-ticket");
        }

    }

    return (
        <ContenedorCarritoStyled>
            <ContenedorItemsCarrito>
                {carrito.length === 0 ?
                    <TxtGenerico weight="normal" >(Agrega Items Al Carrito)</TxtGenerico> :
                    carrito.map((item, index) => <ItemCarrito key={index} idCarrito={index} item={item} />)
                }
            </ContenedorItemsCarrito>
            <ContenedorBottomTotal>

                <DescuentoCarrito />
                <TotalCarrito totalVenta={totalVenta} total={total} handleClick={handleClick} />

            </ContenedorBottomTotal>
        </ContenedorCarritoStyled>
    );
}
