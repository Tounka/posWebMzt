import styled from "styled-components";

import { H2Pos, TxtGenerico } from "../../../../ComponentesGenerales/titulos";
import { ItemInventario } from "../../Componentes/ItemGenerarInventario";
import { useContextoGeneral } from "../../../../Contextos/ContextoGeneral";
import { Form } from "formik";
import { obtenerFechaFormato } from "../../../../Fn/ObtenerFechaHora";
import { BtnSubmit } from "../../../../ComponentesGenerales/Formulario/BtnSubmit";
import { useState } from "react";
import { ModalHolaMundo } from "../../Componentes/ModalVenta";
import { ContenedorTop } from "../../Componentes/ContenedorTop";
import { Contenedor100 } from "../../../../ComponentesGenerales/layouts";

const ContenedorReportes = styled(Contenedor100)`
    display: flex;
    flex-direction: column;
    justify-content: start;  
    align-items: center; 
    padding: 20px;
    h2{
        margin-bottom: 20px;
    }
`;

const ContenedorInventario = styled(Form)`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    gap: 10px;
`;

const SeparacionCategorias = styled.div`
    font-size: 24px;
    width: 100%;
    font-weight: bold;
    color: var(--colorPrincipal);
    margin:10px 0;
`;


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
  padding: 20px 50px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;
const BtnModal = styled.button`
  background-color: var(--colorBlanco);
  color: var(--colorPrincipal);

  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;


const ContenedorCategoria = styled.div`
    border-bottom: solid 4px var(--colorPrincipal);
`;

export const EntradaProductoUx = ({ catalogo, user, values, handleChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationModal, setIsConfirmationModal] = useState(false);
    const [isHelloWorldModalOpen, setIsHelloWorldModalOpen] = useState(false); // Nuevo estado
    const [itemsWithZero, setItemsWithZero] = useState([]);
    const fechaHora = obtenerFechaFormato();


    const checkZeroItems = () => {
        const zeroItems = catalogo.flatMap(categoria =>
            categoria.items.filter(item => values[item.id] === 0)
        );
        setItemsWithZero(zeroItems);

        if (zeroItems.length > 0) {
            setIsConfirmationModal(true); // Muestra el modal de confirmación
        } else {
            setIsModalOpen(true); // Si no hay elementos con cantidad 0, muestra el modal de resumen
        }
    };

    const handleContinue = () => {
        setIsConfirmationModal(false);  // Cierra el modal de confirmación
        setIsModalOpen(true);            // Muestra el modal de resumen

        // Después de mostrar el modal de resumen, muestra el "Hola Mundo"
        setIsHelloWorldModalOpen(true); // Muestra el modal "Hola Mundo"
    };

    const handleBack = () => {
        setIsConfirmationModal(false);  // Regresa al estado inicial (sin mostrar modales)
    };

    const closeHelloWorldModal = () => {
        setIsHelloWorldModalOpen(false); // Cierra el modal "Hola Mundo"
    };

    return (
        <ContenedorReportes>
        

            {/* Modal de confirmación si hay items con cantidad 0 */}
            {isConfirmationModal && (
                <ModalContainer>
                    <ModalContent>
                        <h2>Advertencia</h2>
                        <p>Los siguientes items tienen 0:</p>
                        <ul>
                            {itemsWithZero.map((item) => (
                                <li key={item.id}>{item.txt}</li>
                            ))}
                        </ul>
                        <p>¿Seguro que deseas continuar?</p>
                        <BtnModal onClick={handleBack}>Regresar</BtnModal>
                        <BtnModal onClick={handleContinue}>Continuar</BtnModal>
                    </ModalContent>
                </ModalContainer>
            )}

            {/* Modal con "Hola Mundo" */}
            {isHelloWorldModalOpen && (
                 <ModalHolaMundo
                 isOpen={isHelloWorldModalOpen} // Controla si el modal está abierto
                 onClose={closeHelloWorldModal}  // Función para cerrar el modal
                 catalogo={catalogo}
                 values={values}
             />
            )}

            {/* Formulario de inventario */}
            <ContenedorInventario>
                <ContenedorTop txt="Entrada Producto" user={user} fechaHora={fechaHora} />
                {catalogo.map((categoria, index) => (
                    <ContenedorCategoria key={index}>
                        <SeparacionCategorias>{categoria?.categoria}</SeparacionCategorias>
                        {categoria.items?.map((item) => (
                            <ItemInventario
                                key={item.id}
                                id={item.id}
                                name={item.id}
                                label={item.txt}
                                value={values[item.id]} // Asigna el valor actual a cada input
                                onChange={handleChange} // Asigna la función handleChange
                            />
                        ))}
                    </ContenedorCategoria>
                ))}
                <BtnSubmit type="submit" onClick={checkZeroItems}>Siguiente</BtnSubmit>
            </ContenedorInventario>
        </ContenedorReportes>
    );
};

