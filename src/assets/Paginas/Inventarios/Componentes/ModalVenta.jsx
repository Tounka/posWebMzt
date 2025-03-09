import React, { useRef } from "react";
import styled from "styled-components";

export const ModalHolaMundo = ({ isOpen, onClose, catalogo, values }) => {
    if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

    // Recolectamos todos los items y sus cantidades en un formato plano
    const items = catalogo.flatMap(categoria =>
        categoria.items.map(item => ({
            nombre: item.txt,
            cantidad: values[item.id] || 0,
        }))
    );

    // Ref para la tabla
    const tableRef = useRef();

    // Función para imprimir la tabla directamente desde el modal
    const handlePrint = () => {
        const printWindow = window.document; // Usamos el documento actual
        const originalContent = printWindow.body.innerHTML; // Guardamos el contenido original de la página
        const printContent = tableRef.current.outerHTML; // Obtenemos solo la tabla para imprimir

        // Insertamos la tabla en el documento de impresión
        printWindow.body.innerHTML = `<div style="text-align: center;"><h2>Inventario Completo</h2></div>${printContent}`;

        // Llamamos a print() para imprimir sin abrir una nueva ventana
        window.print();

        // Restauramos el contenido original de la página después de la impresión
        printWindow.body.innerHTML = originalContent;
    };

    return (
        <ModalContainer>
            <ModalContent>
                <h2>Inventario Completo</h2>
                <Table ref={tableRef}>
                    <thead>
                        <tr>
                            <th>Nombre del Item</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <BtnModal onClick={onClose}>Cerrar</BtnModal>
                <PrintBtn onClick={handlePrint}>Imprimir</PrintBtn> {/* Botón para imprimir */}
            </ModalContent>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: var(--colorPrincipal);
  padding: 20px;
  border-radius: 10px;
  max-width: 210mm; /* Tamaño A4 */
  max-height: 297mm; /* Tamaño A4 */
  
  overflow-y: auto;
  width: 100%;
  height: 90%;
  h2{
    text-align: center;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: var(--colorPrincipal);
    color: white;
  }

  td {
    background-color: #f9f9f9;
    color: var(--colorPrincipal);
  }
`;

const BtnModal = styled.button`
  background-color: var(--colorBlanco);
  border: none;
  color: var(--colorPrincipal);
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

const PrintBtn = styled.button`
  background-color: #4CAF50; /* Color verde para el botón de impresión */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin: 10px;
  cursor: pointer;
`;
