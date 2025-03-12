import React, { useState } from "react";
import styled from "styled-components";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";
import { TxtGenerico } from "../../../../ComponentesGenerales/titulos";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color:var(--colorPrincipal);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Boton = styled.button`
  padding: 0.75rem;
  background-color: var(--colorPrincipal);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4338ca;
  }
`;

const ContenedorInputFechas = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  div{
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const SeccionSetFecha = ({ setRangoFechas }) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const manejarConsulta = (e) => {
    e.preventDefault();
    if (setRangoFechas) {
      setRangoFechas({ fechaInicio, fechaFinal });
    }
  };

  return (
    <Contenedor100>
      <Formulario onSubmit={manejarConsulta}>
        <TxtGenerico align= "center" size="28px" color="var(--colorPrincipal)"> Selecciona el rango de fechas: </TxtGenerico>
        <ContenedorInputFechas>
          <div>
            <Label htmlFor="fechaInicio">Fecha Inicio:</Label>
            <Input
              type="date"
              id="fechaInicio"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="fechaFinal">Fecha Final:</Label>
            <Input
              type="date"
              id="fechaFinal"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
              required
            />
          </div>
        </ContenedorInputFechas>

        <Boton type="submit">Consultar</Boton>
      </Formulario>
    </Contenedor100>
  );
};
