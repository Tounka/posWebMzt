import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";

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


const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--colorPrincipalDarken);
  background: var(--colorPrincipal);
  color: var(--colorBlanco);
  border-radius: 4px;

  &::placeholder {
    color: var(--colorBlanco);
    opacity: 1; 
  }



  &::-ms-input-placeholder { 
    color: var(--colorBlanco);
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--colorPrincipal);
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: var(--colorPrincipalDarken);
  }
`;

const ContenedorInputStyled = styled.div`
    width: 100%;
    display: flex;
`






export const ChecadorDeBarrasIntegrado = ({ onProductoSeleccionado }) => {
    const { catalogoV2 } = useContextoGeneral();
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const bufferRef = useRef("");
    const timeoutRef = useRef(null);

    // Función para manejar el escaneo de códigos de barras
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            
            if (event.key === "Enter") {
                const codigo = bufferRef.current;
                console.log("Código escaneado:", codigo);
                setSearchTerm(codigo); // Mostrar el código en el input
                buscarProductoPorCodigo(codigo);
                bufferRef.current = "";
                return;
            }
            
            bufferRef.current += event.key;
            timeoutRef.current = setTimeout(() => (bufferRef.current = ""), 500);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Función para buscar producto por código (ID)
    const buscarProductoPorCodigo = (codigo) => {
        const productoEncontrado = catalogoV2.find(
            producto => producto.id && producto.id.toString() === codigo
        );

        if (productoEncontrado) {
            setSuggestions([]); // Limpiar sugerencias
            if (onProductoSeleccionado) {
                onProductoSeleccionado(productoEncontrado.id);
            }
        } else {
            setSuggestions([]); // Limpiar sugerencias si no se encuentra
        }
    };

    // Manejo de clicks fuera del componente
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Búsqueda de sugerencias
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSuggestions([]);
            return;
        }

        const searchTermLower = searchTerm.toLowerCase();
        const filtered = catalogoV2
            .filter((producto) => (
                producto.nombre.toLowerCase().includes(searchTermLower) ||
                (producto.id && producto.id.toString().includes(searchTermLower))
            ))
            .slice(0, 2)

        setSuggestions(filtered);
    }, [searchTerm, catalogoV2]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSuggestionClick = (producto) => {
        setSearchTerm(producto.nombre);
        setSuggestions([]);
        inputRef.current.focus();
        
        if (onProductoSeleccionado) {
            onProductoSeleccionado(producto.id);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (searchTerm.trim() !== "") {
            setSuggestions(filtrarProductos(searchTerm));
        }
    };

    return (
        <ContenedorInputStyled>
            <SearchContainer ref={containerRef}>
                <SearchInput
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    placeholder="Buscar por nombre o ID..."
                    ref={inputRef}
                />
                {isFocused && suggestions.length > 0 && (
                    <SuggestionsList>
                        {suggestions.map((producto) => (
                            <SuggestionItem
                                key={producto.id}
                                onClick={() => handleSuggestionClick(producto)}
                            >
                                <div>{producto.nombre}</div>
                                <div style={{ fontSize: '0.8em', color: 'var(--colorBlanco)' }}>
                                    ID: {producto.id}
                                </div>
                            </SuggestionItem>
                        ))}
                    </SuggestionsList>
                )}
            </SearchContainer>
  
        </ContenedorInputStyled>
    );
};