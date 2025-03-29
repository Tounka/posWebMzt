import { useEffect, useState } from "react";
import { useContextoInventarios } from "../../../../Contextos/ContextoInventarios";
import { ContenedorGenerico, ContenedorItemProducto } from "../../../../ComponentesGenerales/Genericos/contendores";
import { TxtGenerico } from "../../../../ComponentesGenerales/Genericos/titulos";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { Contenedor100 } from "../../../../ComponentesGenerales/Genericos/layouts";
import { PiHandSoapBold } from "react-icons/pi";

const ControlUnidadesStyled = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 30px;
    background-color: ${props => (Number(props.unidades) == 1 ? "var(--colorVerde)" : "var(--colorNaranja)")};
`;

const ContenedorTxtStyled = styled(Contenedor100)`
    color: var(--colorBlanco);
    font-weight: bold;
    font-size: 20px;
`;

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
`;

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
`;

const ControlUnidades = ({ unidades, handleClickPlus, handleClickLess }) => {
    return (
        <ControlUnidadesStyled unidades={unidades}>
            {unidades >= 1 && (
                <>
                    <BtnMenosUnidadesStyled onClick={() => handleClickLess()}>
                        <FaMinus />
                    </BtnMenosUnidadesStyled>
                    <ContenedorTxtStyled>
                        ({unidades})
                    </ContenedorTxtStyled>
                </>
            )}
            <BtnMasUnidadesStyled onClick={() => handleClickPlus()}>
                <FaPlus />
            </BtnMasUnidadesStyled>
        </ControlUnidadesStyled>
    );
};

export const ItemProductoEtiqueta = ({ producto }) => {
    const { etiquetasAGenerar, setEtiquetasAGenerar } = useContextoInventarios();
    const [unidades, setUnidades] = useState(0);

   
    useEffect(() => {
        const productoEnEtiquetas = etiquetasAGenerar.find(item => item.id === producto.id);
        setUnidades(productoEnEtiquetas ? etiquetasAGenerar.filter(item => item.id === producto.id).length : 0);
    }, [etiquetasAGenerar, producto.id]);

    const handleClickPlus = () => {
        setEtiquetasAGenerar(prevEtiquetas => {
            const existe = prevEtiquetas.some(item => item.id === producto.id);
            if (!existe) {
                return [...prevEtiquetas, producto];
            }
            return prevEtiquetas;
        });
        console.log("Producto agregado:", producto.nombre);
    };

    const handleClickLess = () => {
        setEtiquetasAGenerar(prevEtiquetas => {
            return prevEtiquetas.filter(item => item.id !== producto.id);
        });
        console.log("Producto eliminado:", producto.nombre);
    };

    return (
        <ContenedorItemProducto id={producto.id}>
            <ContenedorGenerico width="150px" align="center" onClick={() => handleClickPlus()}>
                <TxtGenerico color="var(--colorPrincipal)" line=".8" size="58px">
                    {producto.icono || <PiHandSoapBold />}
                </TxtGenerico>
            </ContenedorGenerico>

            <ContenedorGenerico width="150px" onClick={() => handleClickPlus()}>
                <TxtGenerico color="var(--colorPrincipal)" line=".8" align="center">
                    {producto.nombre}
                </TxtGenerico>
            </ContenedorGenerico>

            <ControlUnidades unidades={unidades} handleClickLess={handleClickLess} handleClickPlus={handleClickPlus} />
        </ContenedorItemProducto>
    );
};
