import { Formik, Form, ErrorMessage } from "formik";
import { validateContraseña, validateCorreo } from "../../validaciones";
import styled from "styled-components";
import { FieldStyledLabelInside } from "../../ComponentesGenerales/Genericos/inputs";
import { TxtSinEtiquetas } from "../../ComponentesGenerales/Genericos/titulos";
import { BtnGenerico } from "../../ComponentesGenerales/Genericos/inputs";
import * as yup from "yup";
import { useAuth } from "../../Contextos/ContextoAuth";
import { useContext, useEffect } from "react";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useNavigate } from "react-router";
import { InformacionOperacion } from "./componentes/InformacionOperacion";

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
  const { login } = useAuth();
  const { user, localData } = useContextoGeneral();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/venta");
    }
  }, [user]);

  const validationSchema = yup.object({
    correo: validateCorreo,
    contraseña: validateContraseña,
  });

  const handleSubmit = (values) => {
    if (!localData?.cajaId) {
      alert("Es necesario agregar una caja antes de continuar.");
      return;
    }
    login(values);
  };

  return (
    <Formik
      initialValues={{ correo: "", contraseña: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
       
          <ContenedoForm onSubmit={handleSubmit} className="form-container">
            <InformacionOperacion />


            <ContenedorField>
              <FieldStyledLabelInside placeholder="Ingresa tu correo electrónico" type="email" name="correo" />
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
