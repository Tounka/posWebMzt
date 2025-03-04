import styled from "styled-components";
const ContenedorItemStyled = styled.div`
    height: 60px;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    border-top: solid 4px var(--colorPrincipal);
    border-left: solid 4px var(--colorPrincipal);
    border-right: solid 4px var(--colorPrincipal);
    padding: 0 20px;
`;

const Label = styled.label`
    color: var(--colorPrincipal);
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    font-size: 24px;

`;

const InputInventario = styled.input`
    width: 100%; 
    height: 90%;
    text-align: center;
    border-radius: 25px;
    background-color: var(--colorPrincipal);
    border: none;
    padding: 5px;
    color: var(--colorBlanco);
`;

export const ItemInventario = ({ id, name, label, value, onChange }) => {
    return (
        <ContenedorItemStyled>
            <Label htmlFor={id}>{label}</Label>
            <InputInventario
                min={0}
                type="number"
                id={id}
                name={name}
                value={value} 
                onChange={onChange} 
            />
        </ContenedorItemStyled>
    );
};
