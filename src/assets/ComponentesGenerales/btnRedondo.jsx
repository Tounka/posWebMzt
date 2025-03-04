import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";
import styled from "styled-components";
const BtnRedondoStyled = styled.button`
    height: ${props => props.diametro ? props.diametro : "40px"};
    width: ${props => props.diametro ? props.diametro : "40px"};
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

export const BtnRedondo = ({icon =<FaPlus />, handleClick = () => console.log("hola") , diametro, bgColor, size, color}) =>{
    return(
        <BtnRedondoStyled  diametro={diametro} bgColor={bgColor} color={color} size={size} onClick = {() => handleClick()}>
            {icon}
        </BtnRedondoStyled>
    )
}

export const BtnRegresar = ({icon =<IoMdArrowRoundBack /> , diametro, bgColor, size, color}) =>{
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
