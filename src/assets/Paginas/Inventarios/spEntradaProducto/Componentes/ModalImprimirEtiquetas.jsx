import React from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import JSZip from "jszip";  // Importamos la librería JSZip
import { ModalGenerico } from "../../../../ComponentesGenerales/Modal";
import { BtnGenericoRectangular } from "../../../../ComponentesGenerales/BtnsGenericos";
import { useContextoInventarios } from "../../../../Contextos/ContextoInventarios";
import { EtiquetaAImprimir } from "../../../../ComponentesGenerales/Ticket/EtiquetaProducto";
import { formatearNumeroCeros } from "../../../../Fn/utilidades/Agregar0";

const ContenedorModal = styled.div`
    width: 800px;
    max-width: 100%;
    height: 600px;
    max-height: 90%;
    overflow: auto;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 10px;
`;

const ContenedorTickets = styled.div`
    height: 100%;
    width: 100%;
    justify-content: center;
    justify-items: start;
    align-content: start;
    flex-wrap: wrap;
    overflow-y: auto;
    display: flex;
    gap: 10px;
`;

export const ModalImprimirEtiquetas = ({ isOpen, onClose }) => {
    const { etiquetasAGenerar, setEtiquetasAGenerar } = useContextoInventarios();

    const handlePrint = async () => {
        const zip = new JSZip();  // Crear un nuevo archivo ZIP
        const etiquetas = document.querySelectorAll(".etiqueta-a-imprimir");

        // Obtener la fecha actual en formato "dd-mm"
        const fechaActual = new Date();
        const dia = String(fechaActual.getDate()).padStart(2, '0'); // Asegurarse de que el día tenga 2 dígitos
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, así que sumamos 1

        // Crear el nombre de la carpeta con la fecha
        const nombreCarpeta = `${dia}-${mes}`;

        // Convertir las etiquetas a imágenes y agregar al ZIP
        for (const etiqueta of etiquetas) {
            const canvas = await html2canvas(etiqueta);
            const imgData = canvas.toDataURL("image/png");

            // Convertir la imagen a Blob
            const byteCharacters = atob(imgData.split(",")[1]);
            const byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
                const slice = byteCharacters.slice(offset, offset + 1024);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                byteArrays.push(new Uint8Array(byteNumbers));
            }

            const imgBlob = new Blob(byteArrays, { type: "image/png" });

            const nombreArchivo = etiqueta.getAttribute('dataNombre'); 

            // Agregar la imagen al archivo ZIP, dentro de una carpeta con el nombre de la fecha
            zip.folder(nombreCarpeta).file(`${nombreArchivo}.png`, imgBlob);
        }

        // Generar y descargar el archivo ZIP
        zip.generateAsync({ type: "blob" }).then(function (content) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = `${nombreCarpeta}-etiquetas.zip`; // Usar la fecha en el nombre del archivo ZIP
            link.click();
        });
        setEtiquetasAGenerar([]);
    };

    return (
        <ModalGenerico isOpen={isOpen} onClose={onClose}>
            <ContenedorModal>
                <ContenedorTickets>
                    {etiquetasAGenerar.map((etiqueta, index) => (
                        <EtiquetaAImprimir
                            key={index}
                            nombre={etiqueta.nombre}
                            idProducto={formatearNumeroCeros(etiqueta.id)}
                            idLote={etiqueta.idLote}
                            className="etiqueta-a-imprimir"
                            dataNombre={etiqueta.nombre}  // Asignar nombre a data-nombre
                        />
                    ))}
                </ContenedorTickets>

                <BtnGenericoRectangular txt={"Imprimir"} handleClick={handlePrint} />
            </ContenedorModal>
        </ModalGenerico>
    );
};
