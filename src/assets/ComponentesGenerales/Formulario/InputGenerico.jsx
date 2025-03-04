import { Field, ErrorMessage } from "formik";
import styled, { keyframes } from "styled-components";

const ContenedorInputStyled = styled.div`
    height: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 10px;
    border-radius: 20px;
    background-color: var(--colorPrincipal);
    border: solid 2px var(--colorPrincipal);
    overflow: hidden;
    label{
        display: flex;
        justify-content: end;
        align-items: center;
        font-size: 22px;
        font-weight: bold;
        color: white;
        cursor: pointer;
        user-select: none;
    }
    input{
        border: none;
        padding-left: 10px;
        border-radius: 2px;
        color: var(--colorPrincipal);
        &:focus{
            border-color: var(--colorPrincipal); 
        }
    }


`
const vibrar = keyframes`
    0% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
    75% { transform: translateX(-4px); }
    100% { transform: translateX(4px); }
`;
const ErrorMessageStyled = styled(ErrorMessage)`
    width: 100%;
    color: red;
    font-size: 14px; 
    margin-top: 5px;
    animation: ${vibrar} 0.5s ease-in-out; 
    animation-iteration-count: 1; 
`;
const ContenedorInputGenericoStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const InputGenerico = ({ id = "id", name = "name", placeholder = "Ingresa información", txtLabel = "Label", type = "text" }) => {
    return (
        <ContenedorInputGenericoStyled>
            <ContenedorInputStyled>
                <label htmlFor={id}>{txtLabel}</label>
                <Field
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                />
            </ContenedorInputStyled>
            <ErrorMessageStyled name={name} component="div" />
        </ContenedorInputGenericoStyled>
    );
};
