import styled from "styled-components"

import { Form, Formik } from "formik"

import { BtnRegresar } from "../../../ComponentesGenerales/Genericos/btnRedondo"
import { InputGenerico, InputSelect } from "../../../ComponentesGenerales/Formulario/InputGenerico"
import { BtnSubmit } from "../../../ComponentesGenerales/Formulario/BtnSubmit"
import { ModalGenerico } from "../../../ComponentesGenerales/Modal"
import { validateApellido, validateContraseña, validateCorreo, validateNombre, validateRol } from "../../../validaciones"
import * as yup from "yup"
import { modificarUsario } from "../../../dbConection/m-usuariosDb"
import { capitalizarNombres } from "../../../Fn/utilidades/herramientas"


const ContenedorAgregarUsuarioStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 600px;
   
    max-width: 80%;
    max-height: 90%;
    overflow-y: auto;
    border-radius: 20px;
    border: solid 2px var(--colorPrincipal);
    position: relative;
    gap: 10px;
`
const ContenedorContenidoModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderTxt = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: var(--colorPrincipal);
    margin-bottom: 20px;
`
const ContenedorBtn = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
`
const Separador = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    justify-content: space-between;
    gap: 10px;
`
const ContenedorInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
`
export const ModalModificarUsuario = ({ usuarioSeleccionado, isOpen, onClose }) => {
    const initialValues = {
        nombre: usuarioSeleccionado?.nombre || "",
        apellido: usuarioSeleccionado?.apellido || "",
        rol: usuarioSeleccionado?.rol || "",
    }
    const validationSchema = yup.object({
        nombre: validateNombre,
        apellido: validateApellido,
        rol: validateRol,
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        // Verificar si los valores han cambiado
        if (
            values.nombre === initialValues.nombre &&
            values.apellido === initialValues.apellido &&
            values.rol === initialValues.rol
        ) {
            alert("Debes modificar la información para poder subirla");
            setSubmitting(false); // Terminar el estado de submitting si no hay cambios
            return;
        }

        const valoresCapitalizados = {
            ...values,
            nombre: capitalizarNombres(values.nombre),
            apellido: capitalizarNombres(values.apellido),
        };

        try {
            // Llamar a modificarUsario y pasar el setSubmitting para manejar el estado
            await modificarUsario(usuarioSeleccionado.id, valoresCapitalizados, setSubmitting, onClose);
        } catch (error) {
            setSubmitting(false); // Si hay un error, asegúrate de deshabilitar el botón
            console.error("Error al modificar usuario:", error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <ModalGenerico isOpen={isOpen} onClose={onClose}>
                    <ContenedorContenidoModal>
                        <ContenedorAgregarUsuarioStyled>
                            <HeaderTxt> Modificar Usuario </HeaderTxt>
                            <Separador>
                                <ContenedorInputs>
                                    <InputGenerico id="nombre" name="nombre" txtLabel="Nombre" placeholder="Ingresa el nombre del usuario" />
                                    <InputGenerico id="apellido" name="apellido" txtLabel="Apellido" placeholder="Ingresa el apellido del usuario" />
                                    <InputSelect id="rol" name="rol" txtLabel="Rol" options={[{ value: "empleado", txt: "Empleado" }, { value: "Administrador", txt: "Administrador" }]} />
                                </ContenedorInputs>
                                <BtnSubmit type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Cargando..." : "Subir"}
                                </BtnSubmit>
                            </Separador>
                        </ContenedorAgregarUsuarioStyled>
                    </ContenedorContenidoModal>
                </ModalGenerico>
            )}
        </Formik>

    )
}