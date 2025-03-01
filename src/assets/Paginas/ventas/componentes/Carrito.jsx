import styled from "styled-components";
import { FaGreaterThan } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { useContext, useState } from "react";
import { TxtGenerico } from "../../../ComponentesGenerales/titulos";
import { Contenedor100 } from "../../../ComponentesGenerales/layouts";
import { useContextoPaginaVenta } from "../ContextoVenta";

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

const InputCantidad = ({ icono }) => (
    <ContendorLabelCantidad>
        <InputLabel htmlFor={icono}>
            <TxtGenerico color="var(--colorPrincipal)">{icono}</TxtGenerico>
        </InputLabel>
        <ContenedorInputCantidad id={icono} />
    </ContendorLabelCantidad>
);

const ItemCarrito = ({ txt = "item", item }) => {
    let total = item.cantidad * item.precio || 0;
    const [isDesglozado, setIsDesglozado] = useState(false);
    return (
        <ContenedorItemCarritoStyled isDesglozado={isDesglozado}>
            <ContenedorTop>
                <div>
                    <BtnAccionDesglosar isDesglozado={isDesglozado} onClick={() => setIsDesglozado(prev => !prev)}>
                        <FaGreaterThan />
                    </BtnAccionDesglosar>
                    <TxtGenerico size="14px">{txt}</TxtGenerico>
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
                    <InputCantidad icono="#" />
                    <InputCantidad icono="$" />
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
        grid-template-columns: 2fr 2fr;
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
    return (
        <ContenedorTotal>
            <ContenedorTxtCarrito>
                <div><TxtGenerico weight="normal">Productos:</TxtGenerico><TxtGenerico weight="bold">{total}</TxtGenerico></div>
                <div><TxtGenerico weight="normal">Venta:</TxtGenerico><TxtGenerico weight="bold">{totalVenta}</TxtGenerico></div>
            </ContenedorTxtCarrito>
            <ConstBtnSubmit onClick={() => handleClick()}><GrCaretNext /></ConstBtnSubmit>
        </ContenedorTotal>
    );
}

export const Carrito = () => {
    const { carrito, setCarrito, setHandleResetProductosActualizados } = useContextoPaginaVenta();

    const totalVenta = carrito.reduce((acumulador, item) => {
        return acumulador + (item.cantidad * item.precio);
    }, 0);
    const total = carrito.reduce((acumulador, item) => {
        return acumulador + (item.cantidad);
    }, 0);

    const handleClick = () => {
        setCarrito([]);
        setHandleResetProductosActualizados(prevS => prevS + 1);
    }

    return (
        <ContenedorCarritoStyled>
            <ContenedorItemsCarrito>
                {carrito.map((item, index) => <ItemCarrito key={index} item={item} />)}
            </ContenedorItemsCarrito>
            <TotalCarrito totalVenta={totalVenta} total={total} handleClick={handleClick} />
        </ContenedorCarritoStyled>
    );
}
