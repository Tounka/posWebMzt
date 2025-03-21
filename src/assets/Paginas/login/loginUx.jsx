import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateContraseña, validateCorreo } from "../../validaciones"; // Asegúrate de tener validateCorreo en tus validaciones
import styled from "styled-components";
import { FieldStyledLabelInside } from "../../ComponentesGenerales/inputs";
import { TxtSinEtiquetas } from "../../ComponentesGenerales/titulos";
import { BtnGenerico } from "../../ComponentesGenerales/inputs";
import * as yup from "yup";
import { useAuth } from "../../Contextos/ContextoAuth";
import { useContext, useEffect } from "react";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useNavigate } from "react-router";
const ContenedoForm = styled(Form)`
    width: 500px;
    height: 350px;
    max-width: 90%;
    max-height: 90%;
    background-color: var(--colorPrincipal);
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ContenedorField = styled.div`
  height: 86px;
  width: 100%;
`;

export const LoginUx = () => {
  const {login} = useAuth();
   
  const {user} = useContextoGeneral();
  const navigate = useNavigate();
  useEffect(() =>{
    if(user){
      navigate("/venta")
    }
  },[user])

  const validationSchema = yup.object({
    correo: validateCorreo, 
    contraseña: validateContraseña,
  });
  const handleSubmit = (values)=>{
    login(values);
  }
  
  return (
    <Formik
      initialValues={{ correo: "", contraseña: "" }} // Cambiado a correo
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Datos enviados:", values);
        handleSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <ContenedoForm onSubmit={handleSubmit} className="form-container">
          <TxtSinEtiquetas txt="POS" />
          <ContenedorField>
            <FieldStyledLabelInside placeholder="Ingresa tu correo electrónico" type="email" name="correo" /> {/* Cambiado a correo */}
            <ErrorMessage name="correo" component="div" className="error" />
          </ContenedorField>

          <ContenedorField>
            <FieldStyledLabelInside placeholder="Ingresa tu contraseña" type="password" name="contraseña" />
            <ErrorMessage name="contraseña" component="div" className="error" />
          </ContenedorField>
          <BtnGenerico type="submit">Ingresar</BtnGenerico>
        </ContenedoForm>
      )}
    </Formik>
  );
};
