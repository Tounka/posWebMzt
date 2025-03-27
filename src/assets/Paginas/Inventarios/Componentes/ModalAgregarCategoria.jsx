import styled from "styled-components";
import { Form, Formik } from "formik";
import { InputGenerico, InputGenericoVertical, InputSelect, InputSelectIcono } from "../../../ComponentesGenerales/Formulario/InputGenerico";
import { BtnSubmit } from "../../../ComponentesGenerales/Formulario/BtnSubmit";
import { ModalGenerico } from "../../../ComponentesGenerales/Modal";
import { GridGenerico } from "../../../ComponentesGenerales/Genericos/GridGenerico";
import * as yup from "yup";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { iconos, iconosUtils } from "../../../img/uitls/iconos";
import { AgregarCategoria } from "../../../Fn/AgregarCategoria";

const ContenedorAgregarCategoriaStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 600px;
  
  max-width: 100%;
  border-radius: 20px;
  border: solid 2px var(--colorPrincipal);
  position: relative;
  gap: 20px;
`;

const HeaderTxt = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: var(--colorPrincipal);
  margin-bottom: 20px;
`;
const ContenedorInputSelect = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    align-items: start;
    width: 100%;
    gap: 10px;
`
const IconoSeleccionado = styled.div`
font-size: 40px;
color: var(--colorPrincipal);
display: flex;
justify-content: center;
align-items: center;
`;
export const ModalAgregarCategoria = ({ isOpen, onClose }) => {
  const { categorias } = useContextoGeneral();
  const initialValues = {
    nombre: "",
    tipo: "categoria", 
    categoriaSeleccionada: "",
    icono: "FaEye"
  };

  const validationSchema = yup.object({
    nombre: yup.string().required("El nombre es obligatorio"),
    tipo: yup.string().oneOf(["categoria", "subcategoria"]).required("Debe seleccionar un tipo"),
    categoriaSeleccionada: yup.string().when("tipo", {
      is: "subcategoria",
      then: (schema) => schema.required("Debe seleccionar una categoría principal"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const handleSubmit = (values) => {
    AgregarCategoria();
    console.log("Formulario enviado:", values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
      {({ values, setFieldValue }) => (
        <ModalGenerico isOpen={isOpen} onClose={onClose}>
          <ContenedorAgregarCategoriaStyled>
            <HeaderTxt>Agregar Categoría</HeaderTxt>
            
              <InputGenerico
                id="nombre"
                name="nombre"
                placeholder="Nombre de la categoría"
                txtLabel="Nombre"
                type="text"
              />

              <InputSelect
                id="tipo"
                name="tipo"
                txtLabel="Tipo"
                options={[
                  { value: "categoria", txt: "Categoría" },
                  { value: "subcategoria", txt: "Subcategoría" },
                ]}
              />

              {values.tipo === "subcategoria" && (
                <InputSelect
                  id="categoriaSeleccionada"
                  name="categoriaSeleccionada"
                  txtLabel="Padre"
                  options={categorias.map((cat) => ({ value: cat.id, txt: cat.nombre }))}
                />
              )}
              <ContenedorInputSelect>
                <InputSelectIcono
                  id="icono"
                  name="icono"
                  txtLabel= "icono"
                  placeholder="Selecciona un ícono"
                  options={iconosUtils}
                  onChange={(e) => setFieldValue("icono", e.target.value)} // Actualiza el valor en Formik
                  value={values.icono} // Usa el valor de Formik
                />
                <IconoSeleccionado>{iconos[values.icono]}</IconoSeleccionado> {/* Muestra el ícono seleccionado */}
              </ContenedorInputSelect>
              <BtnSubmit type="submit">Agregar</BtnSubmit>
            
          </ContenedorAgregarCategoriaStyled>
        </ModalGenerico>
      )}
    </Formik>
  );
};
