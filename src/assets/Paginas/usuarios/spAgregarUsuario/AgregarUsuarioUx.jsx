import styled from "styled-components"
import { BtnRegresar } from "../../../ComponentesGenerales/btnRedondo"
import { Form } from "formik"
import { InputGenerico } from "../../../ComponentesGenerales/Formulario/InputGenerico"
import { BtnSubmit } from "../../../ComponentesGenerales/Formulario/BtnSubmit"


const ContenedorAgregarUsuarioStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 600px;
    height: 800px;
    max-width: 80&;
    max-height: 80%;
    border-radius: 20px;
    border: solid 2px var(--colorPrincipal);
    position: relative;
    gap: 10px;
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
export const AgregarUsuarioUx = () => {

    return (
        <ContenedorAgregarUsuarioStyled>
            <HeaderTxt> Altas </HeaderTxt>
            <ContenedorBtn> <BtnRegresar bgColor="var(--colorPrincipal)" /> </ContenedorBtn>
            <Separador>
                <ContenedorInputs>
                    <InputGenerico id="nombre" name="nombre" txtLabel="Nombre" placeholder="Ingresa el nombre del usuario" />
                    <InputGenerico id="apellido" name="apellido" txtLabel="Apellido" placeholder="Ingresa el apellido del usuario" />
                    <InputGenerico id="correo" name="correo" txtLabel="Correo" placeholder="Ingresa el correo del usuario" />
                    <InputGenerico id="contraseña" name="contraseña" txtLabel="Contraseña" placeholder="Ingresa el contraseña del usuario" />
                </ContenedorInputs>
                <BtnSubmit type="submit" > Subir </BtnSubmit>
            </Separador>
        </ContenedorAgregarUsuarioStyled>
    )
}