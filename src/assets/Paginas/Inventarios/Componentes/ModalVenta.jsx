import React, { useRef } from "react";
import styled from "styled-components";
import { ContenedorTop } from "./ContenedorTop";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { Timestamp } from "firebase/firestore";
import { subirInventario } from "../../../dbConection/m-inventarios";

const ContenedorTopStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h2{
    color: white;
  }

`

export const ModalHolaMundo = ({ isOpen, onClose, catalogo, values, fecha }) => {
  const { user } = useContextoGeneral();

  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  // Recolectamos todos los items y sus cantidades en un formato plano
  const itemsPlanos = catalogo.flatMap((categoria) =>
    categoria.items.map((item) => ({
      nombre: item.nombre,
      idReferencia:
        typeof item.idReferencia === "object" && item.idReferencia.id
          ? item.idReferencia.id
          : item.idReferencia,
      stock: values[item.id] || 0,
    }))
  );

  const tableRef = useRef();

  const handlePrint = async () => {
    const catalogoLimpio = catalogo.map(({ categoria, items }) => ({
      categoria,
      items: items.map(({ idReferencia, ...rest }) => {
        const idRef =
          typeof idReferencia === "object" && idReferencia.id
            ? idReferencia.id
            : idReferencia;

        // Buscar la cantidad en el array plano
        const itemEncontrado = itemsPlanos.find((i) => i.idReferencia === idRef);
        const stock = itemEncontrado ? itemEncontrado.stock : 0;

        return {
          ...rest,
          idReferencia: idRef,
          icono: "",
          stock,
        };
      }),
    }));

    const inventario = {
      usuario: {
        nombre: user.nombre,
        apellido: user.apellido,
        id: user.uid,
      },
      catalogo: catalogoLimpio,
      fecha: Timestamp.fromDate(new Date()),
    };

    console.log(inventario);
    console.log(itemsPlanos, "asdasdasda");

    // Aquí podrías subir el inventario si lo deseas
    await subirInventario(inventario);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ContenedorTopStyled>
          <ContenedorTop user={user} txt="Inventario Completo" fechaHora={fecha} />
        </ContenedorTopStyled>

        <Table ref={tableRef}>
          <thead>
            <tr>
              <th>Nombre del Item</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {itemsPlanos.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <BtnModal onClick={onClose}>Cerrar</BtnModal>
        <PrintBtn onClick={handlePrint}>Imprimir</PrintBtn>
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
  max-width: 100%; /* Tamaño A4 */
  max-height: 100%; /* Tamaño A4 */
  
  overflow-y: auto;
  width: 100%;
  height: 100%;
  h2{
    text-align: center;
    margin-bottom: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    padding: 5px;
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
