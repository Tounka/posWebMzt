import styled from "styled-components";
import Barcode from "react-barcode"; // Importamos la librería

import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { TxtGenerico } from "../Genericos/titulos";

const EtiquetaAImprimirStyled = styled.div`
    height: 14mm;
    width: fit-content;
    background-color: white;
    padding: .5mm;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    color: black;
    border: 2px solid black;
    gap: 2mm;
`;

const CodigoDeBarras = styled.div`
    height: 100%;  
    display: flex;
    justify-content: center;


`;
const ContenedorTxtLateral = styled.div`
    height: 100%;
    max-width: 60mm;
    display: flex;
    flex-direction: column;
    p{
        color: black;
        font-weight: normal;
        line-height: 9px;
    }

`

export const EtiquetaAImprimir = ({ nombre,idProducto, idLote = "0000" , className ="", dataNombre }) => {
    const { localData } = useContextoGeneral();

    const IdProducto = `${localData.id}${idProducto}${idLote}`; 

    return (
        <EtiquetaAImprimirStyled className={className} dataNombre={dataNombre}>
            <CodigoDeBarras>
                <Barcode 
                    value={IdProducto} 
                    format="CODE128" 
                    width={1.5}
                    height={32} 
                    margin={2}  
                    displayValue={true}  
                    fontSize={8} 
                />
            </CodigoDeBarras>
            <ContenedorTxtLateral>
                <TxtGenerico size ="6px" >[{idProducto}]</TxtGenerico>
                <TxtGenerico size ="8px" >{nombre}</TxtGenerico> 

            </ContenedorTxtLateral>

        </EtiquetaAImprimirStyled>
    );
};
