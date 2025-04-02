import { useState } from "react"
import { ModalGerenteUx } from "./ModalesGerenteUx"
import { useContextoMenuGerente } from "../../../Contextos/ContextoMenuGerente";
import { ModalArqueo } from "./ModalArqueo";
import { ModalAperturarCaja, ModalCerrarCaja } from "./ModalCaja";
import { ModalAperturarDia, ModalCerrarDia } from "./ModalDia";

export const ModalesGerente = () =>{
    const {modalSeleccionado} = useContextoMenuGerente();
    const modales = {
        arqueo : <ModalArqueo />,
        aperturarCaja : <ModalAperturarCaja />,
        cerrarCaja : <ModalCerrarCaja />,
        aperturarDia : <ModalAperturarDia />,
        cerrarDia : <ModalCerrarDia />,
    }

    return(
        <ModalGerenteUx modalSeleccionado={modales[modalSeleccionado]}   />
    ) 
}