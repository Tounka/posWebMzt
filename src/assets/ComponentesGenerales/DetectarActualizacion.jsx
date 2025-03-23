import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRegisterSW } from "virtual:pwa-register/react";

const ContenedorBtnActualizar = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--colorPrincipal);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const BtnActualizar = styled.button`
  background: white;
  color: var(--colorPrincipal);
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export function UpdatePWA() {
  const { needRefresh, updateServiceWorker } = useRegisterSW();
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    if (needRefresh) setShowUpdate(true);
  }, [needRefresh]);

  if (!showUpdate) return null;

  return (
    <ContenedorBtnActualizar>
      <p>¡Nueva versión disponible!</p>
      <BtnActualizar onClick={() => updateServiceWorker(true)} aria-label="Actualizar PWA">
        Actualizar
      </BtnActualizar>
    </ContenedorBtnActualizar>
  );
}
