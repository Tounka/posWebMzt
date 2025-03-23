import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router";

const BtnSeccionesStyled = styled.button`
    display: grid;
    flex-direction: column;
    justify-content: center;
    grid-template-rows: 65% 35%;
    
    padding: 10px;
    width: 200px;
    height: 200px;

    border: none;
    border-radius: 20px;
    color: var(--colorBlanco);

    background-color: var(--colorPrincipal);
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    &:hover {
        div{

          transform: scale(1.04);
          transition: transform .3s ease;
        }
        
      }
      div{

        transition: transform .3s ease;
      }


`
const TxtSeccion = styled.div`
    font-size: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`


const IconoContenedorStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconoStyled = styled.div`
  font-size: ${props => props.size ? props.size : "25px"} ;  

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: font-size .3s ;
`;

const Icono = ({ icono = <FaUsers />, size }) => {
  return (
    <IconoContenedorStyled>
      <IconoStyled size={size}>
        {icono}
      </IconoStyled>
    </IconoContenedorStyled>
  );
};
export const BtnSecciones = ({ icono = <FaQuestion />, txtSeccion = "Lorem Ipsum", to = "nuevaSeccion" }) => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`/${to}`);
  }
  return (
    <BtnSeccionesStyled onClick={() => handleClick()}>
      <Icono icono={icono} size="100px" />
      <TxtSeccion>
        {txtSeccion}
      </TxtSeccion>
    </BtnSeccionesStyled>
  )
}

const BtnRectangularStyled = styled.button`
  background-color: ${({color}) => color || "var(--colorPrincipal)"};
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`

export const BtnGenericoRectangular = ({txt, handleClick = ()=> console.log("Hola mundo") }) =>{

  return(
    <BtnRectangularStyled onClick ={() =>handleClick()}>
      {txt}
    </BtnRectangularStyled>
  )
}