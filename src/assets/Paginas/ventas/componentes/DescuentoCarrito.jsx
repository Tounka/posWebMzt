import { useState } from "react";
import styled from "styled-components";
import { useContextoPaginaVenta } from "../ContextoVenta";
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";


const ContenedorDescuentoStyled = styled.div`
  border: solid 2px var(--colorBlanco);
  border-radius: 20px;
  height: 100%;
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: 4fr 2fr 1fr; 
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  
  label{
    cursor: pointer;
    user-select: none;
  }
  input {
    height: 100%;
    width: 100%;
    padding: 10px;
    border: none;
    background-color: var(--colorBlanco);
    font-size: 16px;
    text-align: center;

    &:focus {
      outline: none;
    }
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: var(--colorBlanco);
  border-radius: 0;

  cursor: pointer;
  height: 100%;
`;

const SwitchOption = styled.span`
  font-size: 14px;
  color: ${({ active }) => (active ? "var(--colorPrincipal)" : "var(--colorSecundario)")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  transition: color 0.2s ease;
  user-select: none;
`;

export const DescuentoCarrito = () => {
  const { setDescuento } = useContextoPaginaVenta(); // Usamos el contexto para manejar el descuento
  const [valorDescuento, setValorDescuento] = useState(""); // Estado local para el valor del input
  const [tipoDescuento, setTipoDescuento] = useState("$"); // Estado para el tipo de descuento ($ o %)

  const handleChange = (e) => {
    const value = e.target.value;

    // Validación: solo números positivos y máximo 2 decimales
    if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
      setValorDescuento(value); // Actualiza el estado local
      const descuento = parseFloat(value || 0);
      setDescuento({ tipo: tipoDescuento, valor: descuento }); // Actualiza el descuento en el contexto
    }
  };

  const toggleTipoDescuento = () => {
    const nuevoTipo = tipoDescuento === "$" ? "%" : "$"; // Cambia entre $ y %
    setTipoDescuento(nuevoTipo);
    setDescuento({ tipo: nuevoTipo, valor: parseFloat(valorDescuento || 0) }); // Actualiza el contexto
  };

  return (
    <ContenedorDescuentoStyled>
      <label htmlFor="descuento">
        <TxtGenerico>Descuento: </TxtGenerico>
      </label>
      <input
        id="descuento"
        type="number"
        value={valorDescuento}
        onChange={handleChange}
        placeholder="0.0"
        min="0"
        step="1"
      />
      <SwitchContainer onClick={toggleTipoDescuento}>
        <SwitchOption active={tipoDescuento === "$"}>$</SwitchOption>
        <SwitchOption active={tipoDescuento === "%"}>%</SwitchOption>
      </SwitchContainer>
    </ContenedorDescuentoStyled>
  );
};