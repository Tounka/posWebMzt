import { useReactToPrint } from "react-to-print";

// Fn/Imprimir.js
export const imprimirTicket = (contentRef, onAfterPrint = () => {}) => {
  return {
    content: contentRef,
    documentTitle: `Ticket${contentRef.current?.datosTicket?.fechaTransaccion || ""}`,
    onAfterPrint: onAfterPrint
  };
};