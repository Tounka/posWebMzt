import { useState, useEffect } from "react";
import styled from "styled-components";

const ContenedorChecadorDeBarrasStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: black;
    justify-content: center;
`;

export const ChecadorDeBarras = ({ onCodigoDetectado }) => {
    const [codigo, setCodigo] = useState("");
    let buffer = "";
    let timeout = null;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (timeout) clearTimeout(timeout);
            
            if (event.key === "Enter") {
                console.log("Código escaneado:", buffer);
                setCodigo(buffer);
                if (onCodigoDetectado) {
                    onCodigoDetectado(buffer);
                }
                buffer = "";
                return;
            }
            
            buffer += event.key;
            timeout = setTimeout(() => (buffer = ""), 500);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onCodigoDetectado]);

    return (
        <ContenedorChecadorDeBarrasStyled>
            <p>Código detectado: {codigo}</p>
        </ContenedorChecadorDeBarrasStyled>
    );
};
