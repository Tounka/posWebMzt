import styled from "styled-components"

import { Form, Formik } from "formik"

import { BtnRegresar } from "../../../ComponentesGenerales/Genericos/btnRedondo"
import { InputGenerico, InputSelect } from "../../../ComponentesGenerales/Formulario/InputGenerico"
import { BtnSubmit } from "../../../ComponentesGenerales/Formulario/BtnSubmit"
import { ModalGenerico } from "../../../ComponentesGenerales/Modal"
import { validateApellido, validateContraseña, validateCorreo, validateNombre, validateRol } from "../../../validaciones"
import * as yup from "yup"
import { ModificarUsuario } from "../../../Fn/AgregarModificarUsuarios"

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
        correo: usuarioSeleccionado?.correo || "",
        contraseña: usuarioSeleccionado?.contraseña || "",
        rol: usuarioSeleccionado?.rol || "",
    }
    const validationSchema = yup.object({
        nombre: validateNombre,
        apellido: validateApellido,
        correo: validateCorreo,
        contraseña: validateContraseña,
        rol: validateRol,
    });

    const handleSubmit = (values) => {
        ModificarUsuario(values);
        
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
            enableReinitialize
        >
            <ModalGenerico isOpen={isOpen} onClose={onClose}>
                <ContenedorContenidoModal>
                    <ContenedorAgregarUsuarioStyled>
                        <HeaderTxt> Modificar Usuario </HeaderTxt>
                        <Separador>
                            <ContenedorInputs>
                                <InputGenerico id="nombre" name="nombre" txtLabel="Nombre" placeholder="Ingresa el nombre del usuario" />
                                <InputGenerico id="apellido" name="apellido" txtLabel="Apellido" placeholder="Ingresa el apellido del usuario" />
                                <InputGenerico id="correo" name="correo" txtLabel="Correo" placeholder="Ingresa el correo del usuario" />
                                <InputGenerico id="contraseña" name="contraseña" txtLabel="Contraseña" placeholder="Ingresa el contraseña del usuario" />
                                <InputSelect id="rol" name="rol" txtLabel="Rol" options={[{ value: "empleado", txt: "Empleado" }, { value: "Administrador", txt: "Administrador" }]} />
                            </ContenedorInputs>
                            <BtnSubmit type="submit" > Subir </BtnSubmit>
                        </Separador>
                    </ContenedorAgregarUsuarioStyled>
                </ContenedorContenidoModal>
            </ModalGenerico>
        </ Formik>
    )
}