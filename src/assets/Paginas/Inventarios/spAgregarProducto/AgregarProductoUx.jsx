import styled from "styled-components"
import { BtnRegresar } from "../../../ComponentesGenerales/btnRedondo"
import { Form } from "formik"
import { InputGenerico, InputGenericoVertical } from "../../../ComponentesGenerales/Formulario/InputGenerico"
import { BtnSubmit } from "../../../ComponentesGenerales/Formulario/BtnSubmit"
import { GridGenerico } from "../../../ComponentesGenerales/GridGenerico"


const ContenedorAgregarUsuarioStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 1000px;
    height: 800px;
    max-width: 80%;
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
    background-color: red;
`


export const AgregarProductoUx = () => {

    return (
        <ContenedorAgregarUsuarioStyled>
            <HeaderTxt> Agregar Producto </HeaderTxt>
            <ContenedorBtn> <BtnRegresar bgColor="var(--colorPrincipal)" /> </ContenedorBtn>
            <Separador>
                <GridGenerico columns="2fr 3fr" rows="1fr 1fr 1fr" >
                    <InputGenericoVertical id = "nombre" name = "nombre" placeholder = "Nombre del producto" txtLabel = "Nombre" type = "text" />
                    <InputGenericoVertical id = "descripcion" name = "descripcion" placeholder = "Descripcion del producto" txtLabel = "Descripcion" type = "text" />
                    
                    <InputGenericoVertical id = "marca" name = "marca" placeholder = "Marca del producto" txtLabel = "Marca" type = "text" />
                    <GridGenerico columns="1fr 1fr">
                        <InputGenericoVertical id = "costo" name = "costo" placeholder = "Costo del producto" txtLabel = "Costo" type = "number" />
                        <InputGenericoVertical id = "precio" name = "precio" placeholder = "Precio del producto" txtLabel = "Precio" type = "number" />
                    </GridGenerico>

                    <InputGenericoVertical id = "categoria" name = "categoria" placeholder = "Categoria del producto" txtLabel = "Categoria" type = "text" />
                    <InputGenericoVertical id = "subCategoria" name = "subCategoria" placeholder = "SubCategoria del producto" txtLabel = "SubCategoria" type = "text" />
          
                </GridGenerico>
                <BtnSubmit type="submit" > Subir </BtnSubmit>
            </Separador>
        </ContenedorAgregarUsuarioStyled>
    )
}