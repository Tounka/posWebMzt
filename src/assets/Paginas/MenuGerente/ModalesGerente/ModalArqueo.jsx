import styled from "styled-components"
import { ContenedorSeccionModal } from "../Componentes/SeccionModal"
import { TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos"
import { useContextoMenuGerente } from "../../../Contextos/ContextoMenuGerente"
import { useFormik } from "formik"
import { useEffect } from "react";

const ContenedorModalArqueo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: start;
    align-items: center;
    gap: 20px;
`
const ContenedorSeccion = styled.div`
    width: 80%;
    height: 80px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: var(--colorPrincipal);
    border: solid 2px var(--colorPrincipal);
    align-items: center;
`
const ContenedorCantidad = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputCantidad = styled.input`
    width: 90%;
    height: 70%;
    text-align: center;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    
    &:focus {
        outline: none;
        border-color: var(--colorPrincipal);
    }
    
    /* Estilo para cuando hay error */
    ${props => props.$error && `
        border-color: red;
    `}
`

const MensajeError = styled.div`
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
`
const BtnSubmit = styled.button`
   margin-top: 10px;
   padding: 10px 20px;
   background-color: var(--colorPrincipal);
   color: white;
   border: none;
   border-radius: 4px;
   cursor: pointer;
`;
const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`


export const ModalArqueo = () => {
    const { cajaSeleccionada } = useContextoMenuGerente();
    
    const ResumenArqueo = (cajaSeleccionada) => {
        let totalMonetario = 0;
        cajaSeleccionada.tickets.forEach((ticket) => {
            totalMonetario += (ticket.costoTotal - ticket.descuento);
        });
        return totalMonetario;
    };
    
    const ValorTotal = ResumenArqueo(cajaSeleccionada);
    
    const formik = useFormik({
        initialValues: {
            cantidad: ''
        },
        validate: values => {
            const errors = {};
            if (!values.cantidad) {
                errors.cantidad = 'Ingrese una cantidad';
            } else if (isNaN(values.cantidad)) {
                errors.cantidad = 'Debe ser un número válido';
            } else if (parseFloat(values.cantidad) > ValorTotal) {
                errors.cantidad = `No puede ser mayor a $${ValorTotal}`;
            } else if (parseFloat(values.cantidad) <= 0) {
                errors.cantidad = 'La cantidad debe ser positiva';
            }
            return errors;
        },
        onSubmit: values => {
            console.log('Cantidad a retirar:', values.cantidad);
        }
    });

    
    useEffect(() => {
        formik.resetForm();
    }, []);

    return (
        <ContenedorSeccionModal titulo="ARQUEO">
            <ContenedorModalArqueo>
                <ContenedorSeccion>
                    <TxtGenerico align="center;">Venta</TxtGenerico>
                    <ContenedorCantidad>
                        <TxtGenerico color="black" align="center;">$ {ValorTotal}</TxtGenerico>
                    </ContenedorCantidad>
                </ContenedorSeccion>
                <ContenedorSeccion>
                    <TxtGenerico align="center;">Número de Tickets</TxtGenerico>
                    <ContenedorCantidad>
                        <TxtGenerico color="black" align="center;">{cajaSeleccionada.tickets.length}</TxtGenerico>
                    </ContenedorCantidad>
                </ContenedorSeccion>
                
                <FormStyled onSubmit={formik.handleSubmit} >
                    <ContenedorSeccion>
                        <TxtGenerico align="center;">Realizar Retiro</TxtGenerico>
                        <ContenedorCantidad>
                            <InputCantidad
                                type="number"
                                name="cantidad"
                                value={formik.values.cantidad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Ingrese cantidad"
                                $error={formik.touched.cantidad && formik.errors.cantidad}
                            />
                        </ContenedorCantidad>
                    </ContenedorSeccion>
                    {formik.touched.cantidad && formik.errors.cantidad && (
                        <MensajeError>{formik.errors.cantidad}</MensajeError>
                    )}
                    <BtnSubmit type="submit">Confirmar Retiro</BtnSubmit>
                </FormStyled>
            </ContenedorModalArqueo>
        </ContenedorSeccionModal>
    )
}
