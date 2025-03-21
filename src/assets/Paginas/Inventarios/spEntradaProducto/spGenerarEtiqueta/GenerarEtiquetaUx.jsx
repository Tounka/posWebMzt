import styled from "styled-components";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";
import { useContextoInventarios } from "../../../../Contextos/ContextoInventarios";
import { TxtGenerico } from "../../../../ComponentesGenerales/titulos";
import { formatearNumeroCeros } from "../../../../Fn/utilidades/Agregar0";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BtnGenericoRectangular } from "../../../../ComponentesGenerales/BtnsGenericos";
import { EtiquetaAImprimir } from "../../../../ComponentesGenerales/Ticket/EtiquetaProducto";
import { ModalImprimirEtiquetas } from "../Componentes/ModalImprimirEtiquetas";

const ContenedorGenerarEtiquetaStyled = styled(Contenedor100)`
    padding: 30px 20px;
    align-items: start;
`;

const ContenedorEtiquetas = styled.div`
    width: 100%;
    max-width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border: solid 4px var(--colorPrincipal);
    min-height: 100%;
    position: relative;
    gap: 20px;
`;

const ContenedorEtiquetaStyled = styled.div`
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 60px 3fr 1fr;
    background-color: var(--colorPrincipal);
    justify-content: center;
    align-items: center;
    padding: 5px;
    gap: 10px;
`;

const ContenedorTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ContenedorInputStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    
    label {
        height: 50%;
        color: var(--colorPrincipal);
        text-align: center; 
        cursor: pointer;
    }
    input {
        height: 50%;
        color: var(--colorPrincipal);
        text-align: center; 
        border: 1px solid var(--colorPrincipal);
    }
`;
const InputEtiqueta = ({ id, label, value, onChange, min, max }) => {
    const [inputValue, setInputValue] = useState(value ? `${value.slice(0, 2)}-${value.slice(2, 4)}` : "00-00");

    // Maneja el cambio en el input, asegurándose de mantener la sincronización con el estado global
    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue); // Actualiza el valor local para que el input se muestre correctamente
        const [year, month] = newValue.split("-"); // Separamos año y mes
        const formattedValue = `${year.slice(-2)}${month.padStart(2, "0")}`; // "aamm"
        onChange(formattedValue); // Actualiza el estado global
    };

    return (
        <ContenedorInputStyled>
            <label htmlFor={id}>{label}</label>
            <input 
                type="month"  
                id={id}
                value={inputValue} // Usamos el valor local para que se muestre en el input
                onChange={handleChange}
                min={min}
                max={max}
                placeholder="--"
            />
        </ContenedorInputStyled>
    );
};

export const Etiqueta = ({ etiqueta, index, actualizarEtiqueta }) => {
    const handleDateChange = (dateValue) => {
        // Ya no necesitamos formatear aquí ya que lo manejamos en el input directamente
        actualizarEtiqueta(index, "idLote", dateValue);
    };

    return (
        <ContenedorEtiquetaStyled>
            <TxtGenerico align="center" color="white">
                {formatearNumeroCeros(etiqueta.id)}
            </TxtGenerico>
            <TxtGenerico align="left" color="white">
                {etiqueta.nombre}
            </TxtGenerico>

            <InputEtiqueta 
                id={`fecha-${index}`} 
                label="Fecha Caducidad" 
                value={etiqueta.idLote || "0000"}  // Usamos "0000" como valor predeterminado
                onChange={handleDateChange}
                min="2023-01"
                max="2099-12"
            />
        </ContenedorEtiquetaStyled>
    );
};

export const GenerarEtiquetaUx = () => {
    const { etiquetasAGenerar, setEtiquetasAGenerar } = useContextoInventarios();
    const [isModalEtiquetasOpen, setIsModalEtiquetasOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (etiquetasAGenerar.length <= 0) {
            navigate("/inventario/entrada-producto");
        }
    }, [etiquetasAGenerar, navigate]);

    const handleClickGenerarEtiquetas = () => {
        setIsModalEtiquetasOpen(true)
    };

    const actualizarEtiqueta = (index, campo, valor) => {
        setEtiquetasAGenerar((prev) =>
            prev.map((etiqueta, i) =>
                i === index ? { ...etiqueta, [campo]: valor || "" } : etiqueta
            )
        );
    };

    return (
        <ContenedorGenerarEtiquetaStyled>
            <ContenedorEtiquetas>
                <ContenedorTop>
                    {etiquetasAGenerar.map((etiqueta, index) => (
                        <Etiqueta 
                            key={index} 
                            etiqueta={etiqueta} 
                            index={index} 
                            actualizarEtiqueta={actualizarEtiqueta} 
                        />
                    ))}
                </ContenedorTop>
               
                <BtnGenericoRectangular handleClick={handleClickGenerarEtiquetas} txt="Imprimir" />
            </ContenedorEtiquetas>

            <ModalImprimirEtiquetas isOpen={isModalEtiquetasOpen} onClose={() => setIsModalEtiquetasOpen(false)} />
        </ContenedorGenerarEtiquetaStyled>
    );
};