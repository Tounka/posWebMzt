import { H2Pos, TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { ContenedorCategoria, SeccionItems, SeccionCarrito, ContenedorVentasStyled, SeccionCategoria, ContenedorItems } from "../../ventas/componentes/ContenedoresPaginaVentas";
import { ItemCategoria, ItemProducto } from "../../ventas/componentes/ItemCategoria";
import { Carrito } from "../../ventas/componentes/Carrito";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { useState } from "react";
import { Etiquetas } from "./Componentes/Etiquetas";
import { ItemProductoEtiqueta } from "./Componentes/ItemProductoEtiqueta";

export const EntradaProductoUxV2 = ({ catalogo }) => {
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState(catalogo[0]);

  return (
    <ContenedorVentasStyled>

      <SeccionCategoria>
        <TxtGenerico size="20px" color="var(--colorPrincipal)">Categorias</TxtGenerico>
        <ContenedorCategoria>
          {catalogo?.map((categoria, index) => (
            <ItemCategoria setCatalogoSeleccionado={setCatalogoSeleccionado} txt={categoria.categoria} catalogo={catalogo} index={index} />
          ))}
        </ContenedorCategoria>
      </SeccionCategoria>

      <SeccionItems>
        <TxtGenerico size="20px" color="var(--colorPrincipal)">Items</TxtGenerico>
        <ContenedorItems>
          {catalogoSeleccionado?.items.map((item, index) => (

            <ItemProductoEtiqueta producto={item} />

          ))}
          {/* modificar ItemProducto a nuevo componente */}

        </ContenedorItems>
      </SeccionItems>

      <SeccionCarrito>
        <H2Pos >Etiquetas</H2Pos>
        <Etiquetas />
        {/* modificar carrito a nuevo componente */}

      </SeccionCarrito>
    </ContenedorVentasStyled>
  )
};
