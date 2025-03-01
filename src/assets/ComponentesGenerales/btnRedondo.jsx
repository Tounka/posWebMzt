import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import styled from "styled-components";
const BtnRedondoStyled = styled.button`
    height: ${props => props.diametro ? props.diametro : "50px"};
    width: ${props => props.diametro ? props.diametro : "50px"};
    font-size:  ${props => props.size ? props.size : "24px"};
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;
    background-color: ${ props => props.bgColor ? props.bgColor : "transparent"};
    color: ${ props => props.color ? props.color : "white"};
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
`

export const BtnRedondo = ({icon =<GoPlus />, handleClick = () => console.log("hola") , diametro, bgColor, size, color}) =>{
    return(
        <BtnRedondoStyled  diametro={diametro} bgColor={bgColor} color={color} size={size} onClick = {() => handleClick()}>
            {icon}
        </BtnRedondoStyled>
    )
}

export const BtnRegresar = ({icon =<IoReturnUpBack /> , diametro, bgColor, size, color}) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(-1);
    }
    return(
        <BtnRedondoStyled  diametro={diametro} bgColor={bgColor} color={color} size={size} onClick = {() => handleClick()}>
            {icon}
        </BtnRedondoStyled>
    )
}
