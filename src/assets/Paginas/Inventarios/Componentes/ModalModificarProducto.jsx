import styled from "styled-components"

import { Form, Formik, useFormikContext } from "formik"


import { InputGenerico, InputGenericoVertical, InputSelect, InputSelectIcono, InputSelectVerical } from "../../../ComponentesGenerales/Formulario/InputGenerico"
import { BtnSubmit } from "../../../ComponentesGenerales/Formulario/BtnSubmit"
import { ModalGenerico } from "../../../ComponentesGenerales/Modal"
import { validateApellido, validateContraseña, validateCorreo, validateGenerica, validateNombre, validateNumeroGenerico, validateRol } from "../../../validaciones"
import * as yup from "yup"
import { ModificarUsuario } from "../../../Fn/AgregarModificarUsuarios"
import { GridGenerico } from "../../../ComponentesGenerales/Genericos/GridGenerico"
import { iconos, iconosUtils } from "../../../img/uitls/iconos"
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral"
import { modificarUsario } from "../../../dbConection/m-usuariosDb"
import { capitalizarNombres } from "../../../Fn/utilidades/herramientas"
import { modificarProducto } from "../../../dbConection/m-productos"

const ContenedorAgregarUsuarioStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 850px;
   
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
const ContenedorInputSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;

    grid-column: 1/3;
    gap: 10px;
`
export const ModalModificarProductos = ({ productoSeleccionado, isOpen, onClose }) => {
    const { categorias } = useContextoGeneral();
    const initialValues = {
        nombre: productoSeleccionado?.nombre || "",
        descripcion: productoSeleccionado?.descripcion || "",
        marca: productoSeleccionado?.marca || "",
        costo: productoSeleccionado?.costo || 0,
        precio: productoSeleccionado?.precio || 0,
        categoria: productoSeleccionado?.categoria || "",
        subCategoria: productoSeleccionado?.subCategoria || "",
        icono: productoSeleccionado?.icono?.type?.name || "",
    };
    const options = {
        categoria: [],
        subcategoria: [{
            txt: "Sin subcategoría",
            value: ""
        }]
    };

    categorias.forEach((categoria) => {
        const option = {
            txt: categoria.categoria,
            value: categoria.categoria
        };

        if (!categoria.categoriaPadre) {
            options.categoria.push(option);
        } else {
            options.subcategoria.push(option);
        }
    });


    const validationSchema = yup.object({
        nombre: validateNombre,
        descripcion: validateGenerica,
        categoria: validateGenerica,

        costo: validateNumeroGenerico,
        precio: validateNumeroGenerico,
    });
    const IconoSeleccionado = styled.div`
    font-size: 40px;
    color: var(--colorPrincipal);
    display: flex;
    justify-content: center;
    align-items: center;
`;

    const handleSubmit = async (values, { setSubmitting }) => {
        let valuesAModificar = {
            nombre: capitalizarNombres(values.nombre),
            descripcion: values.descripcion,
            marca: values.marca,
            categoria: values.categoria,
            subCategoria: values.subCategoria,
            costo: values.costo,
            precio: values.precio,
        }
        setSubmitting(true);
        await modificarProducto(productoSeleccionado.idReferencia, valuesAModificar, onClose);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ values, setFieldValue, isSubmitting }) => ( // Accede a values y setFieldValue aquí
                <ModalGenerico isOpen={isOpen} onClose={onClose}>
                    <ContenedorContenidoModal>
                        <ContenedorAgregarUsuarioStyled>
                            <HeaderTxt>Modificar Producto</HeaderTxt>
                            <Separador>
                                <GridGenerico columns="2fr 3fr" rows="100px 100px 100px 60px">
                                    <InputGenericoVertical id="nombre" name="nombre" placeholder="Nombre del producto" txtLabel="Nombre" type="text" />
                                    <InputGenericoVertical id="descripcion" name="descripcion" placeholder="Descripcion del producto" txtLabel="Descripcion" type="text" />
                                    <InputGenericoVertical id="marca" name="marca" placeholder="Marca del producto" txtLabel="Marca" type="text" />

                                    <GridGenerico columns="1fr 1fr">
                                        <InputGenericoVertical id="costo" name="costo" placeholder="Costo del producto" txtLabel="Costo" type="number" />
                                        <InputGenericoVertical id="precio" name="precio" placeholder="Precio del producto" txtLabel="Precio" type="number" />
                                    </GridGenerico>


                                    <InputSelectVerical id="categoria"
                                        name="categoria"
                                        placeholder="Categoria del producto"
                                        txtLabel="Categoria"
                                        options={options.categoria}
                                        onChange={(e) => {
                                            setFieldValue("categoria", e.target.value);
                                        }}
                                    />

                                    <InputSelectVerical id="subCategoria"
                                        name="subCategoria"
                                        placeholder="subCategoria del producto"
                                        txtLabel="subCategoria"
                                        options={options.subcategoria}
                                        onChange={(e) => {
                                            setFieldValue("subCategoria", e.target.value);
                                        }}
                                    />

                                    <ContenedorInputSelect>
                                        <InputSelectIcono
                                            id="icono"
                                            name="icono"
                                            placeholder="Selecciona un ícono"
                                            options={iconosUtils}
                                            onChange={(e) => setFieldValue("icono", e.target.value)} // Actualiza el valor en Formik
                                            value={values.icono} // Usa el valor de Formik
                                        />
                                        <IconoSeleccionado>{iconos[values.icono]}</IconoSeleccionado> {/* Muestra el ícono seleccionado */}
                                    </ContenedorInputSelect>
                                </GridGenerico>

                                <BtnSubmit type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Cargando..." : "Modificar"}
                                </BtnSubmit>
                            </Separador>
                        </ContenedorAgregarUsuarioStyled>
                    </ContenedorContenidoModal>
                </ModalGenerico>
            )}
        </Formik>
    );
};