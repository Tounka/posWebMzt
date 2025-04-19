import styled from "styled-components"
import { ModalGenerico } from "../../../ComponentesGenerales/Modal"
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos"
import { InputSelect } from "../../../ComponentesGenerales/Formulario/InputGenerico"
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";


const BtnConfiguracionStyled = styled.div`
    width: 150px;
    height: 60px;
    background-color: var(--colorPrincipal);
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    font-weight: bold;

    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    user-select: none;
`
export const BtnCofiguracion = ({ setBoolModalConfig }) => {
    const handleClick = () => {
        setBoolModalConfig(true)
    }
    return (
        <BtnConfiguracionStyled onClick={() => handleClick()}>
            Configuracion
        </BtnConfiguracionStyled>
    )
}






const ContenedorModalConfiguracion = styled.div`
    width: 450px;
    height: auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const ContenedorForm = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

const InputStyled = styled.input`
    width: 80%;
    padding: 10px;
    border: 2px solid var(--colorPrincipal);
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    text-align: center;
`;

const BotonStyled = styled.button`
    width: 80%;
    padding: 10px;
    background: var(--colorPrincipal);
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform .1s ease-in;
    &:hover {
        transform: scale(.95);
        transition: transform .1s ease-in;
    }
`;

export const ModalConfiguracion = ({ onClose, isOpen }) => {
    const [initialCaja, setInitialCaja] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { setLocalData } = useContextoGeneral();

    useEffect(() => {
        const savedCaja = localStorage.getItem("cajaSeleccionada");
        if (savedCaja) {
            setInitialCaja(savedCaja);
            setLocalData({
                ubicacion: "Mazatlan Sinaloa",
                sucursal: "Sucursal X",
                id: 1,
                cajaId: savedCaja,
            })
        }
    }, []);

    const handlePasswordSubmit = () => {
        if (password === "2020") {
            setIsAuthenticated(true);
        } else {
            alert("Contraseña incorrecta");
        }
    };

    return (
        <ModalGenerico onClose={onClose} isOpen={isOpen}>
            {!isAuthenticated ? (
                <ContenedorModalConfiguracion>
                    <TxtGenerico color="var(--colorPrincipal)" align="center" size="22px">
                        Ingrese la contraseña
                    </TxtGenerico>
                    <InputStyled
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handlePasswordSubmit();
                            }
                        }}
                    />
                    <BotonStyled onClick={handlePasswordSubmit}>Ingresar</BotonStyled>
                </ContenedorModalConfiguracion>
            ) : (
                <Formik
                    enableReinitialize
                    initialValues={{ caja: initialCaja }}
                    validationSchema={Yup.object({
                        caja: Yup.number().required("Campo requerido").typeError("Debe ser un número")
                    })}
                    onSubmit={(values) => {
                        localStorage.setItem("cajaSeleccionada", values.caja);
                        setLocalData({
                            ubicacion: "Mazatlan, Sinaloa",
                            sucursal: "Sucursal X",
                            id: 1,
                            cajaId: values.caja,
                        })
                        onClose();
                    }}
                >
                    {({ handleSubmit }) => (
                        <ContenedorModalConfiguracion>
                            <TxtGenerico color="var(--colorPrincipal)" align="center" size="22px">
                                Configuración de caja
                            </TxtGenerico>
                            <ContenedorForm onSubmit={handleSubmit}>
                                <InputSelect
                                    id="inputSeleccionarCaja"
                                    name="caja"
                                    txtLabel="Caja"
                                    options={Array.from({ length: 2 }, (_, i) => ({ value: i + 1, txt: (i + 1).toString() }))}
                                />
                                <BotonStyled type="submit">Guardar</BotonStyled>
                            </ContenedorForm>
                        </ContenedorModalConfiguracion>
                    )}
                </Formik>
            )}
        </ModalGenerico>
    );
};
