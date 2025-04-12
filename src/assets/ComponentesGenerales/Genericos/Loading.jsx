import styled, { keyframes } from "styled-components";
import { Contenedor100 } from "./layouts";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255, 255, 255, 0.1);
  border-top: 6px solid var(--colorPrincipal);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Texto = styled.p`
  margin-top: 20px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: var(--colorPrincipal);
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: .7; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const Loading = () => {
  return (
    <Contenedor100 style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Spinner />
      <Texto>Cargando...</Texto>
    </Contenedor100>
  );
};
