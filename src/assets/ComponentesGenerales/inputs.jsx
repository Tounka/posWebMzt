import styled from "styled-components";
import { Field } from "formik";
export const FieldStyledLabelInside = styled(Field)`
    height: 60px;
    width: 100%;

    border: none;
    border-radius: 30px;
    background-color: var(--colorBlanco);
    text-align: center;

    font-size: 20px;

    &::placeholder {
    color: var(--colorPrincipal);
    opacity: 1; 
  }
    
`

export const BtnGenerico = styled.button`
    width: 160px;
    height: 40px;
    color: var(--colorPrincipal);

    font-size: 16px;
    background-color: var(--colorBlanco);
    border: none;
    border-radius: 30px;
    cursor: pointer;
`


