import { H2Pos, TxtGenerico } from "../../ComponentesGenerales/titulos";
import { ContenedorCategoria, SeccionItems, SeccionCarrito, ContenedorVentasStyled, SeccionCategoria, ContenedorItems} from "./componentes/ContenedoresPaginaVentas";
import { ItemCategoria, ItemProducto } from "./componentes/ItemCategoria";
import { Carrito } from "./componentes/Carrito";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useState } from "react";

export const VentasUx = ({catalogo}) => {
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState(catalogo[0]);
  
  return (
    <ContenedorVentasStyled>

      <SeccionCategoria>
        <TxtGenerico size="20px"  color="var(--colorPrincipal)">Categorias</TxtGenerico>

        <ContenedorCategoria>
          {catalogo?.map((categoria, index) =>(
          
          <ItemCategoria setCatalogoSeleccionado={setCatalogoSeleccionado}   txt={categoria.categoria}  catalogo={catalogo} index={index} />
            
          ))}
 

        </ContenedorCategoria>
      </SeccionCategoria>

      <SeccionItems>
        <TxtGenerico size="20px" color="var(--colorPrincipal)">Items</TxtGenerico>
        <ContenedorItems>
        {catalogoSeleccionado?.items.map((item, index) =>(
          
            <ItemProducto producto={item} />
          ))}
          
   
        </ContenedorItems>
      </SeccionItems>

      <SeccionCarrito>
          <H2Pos >Carrito</H2Pos>
          <Carrito />
      </SeccionCarrito>
    </ContenedorVentasStyled>
  )
};
