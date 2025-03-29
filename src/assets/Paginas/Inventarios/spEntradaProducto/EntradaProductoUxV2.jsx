import { H2Pos, TxtGenerico } from "../../../ComponentesGenerales/Genericos/titulos";
import { ContenedorCategoria, SeccionItems, SeccionCarrito, ContenedorVentasStyled, SeccionCategoria, ContenedorItems } from "../../ventas/componentes/ContenedoresPaginaVentas";
import { ItemCategoria, ItemProducto } from "../../ventas/componentes/ItemCategoria";
import { Carrito } from "../../ventas/componentes/Carrito";
import { useContextoGeneral } from "../../../Contextos/ContextoGeneral";
import { useState } from "react";
import { Etiquetas } from "./Componentes/Etiquetas";
import { ItemProductoEtiqueta } from "./Componentes/ItemProductoEtiqueta";
import { ChecadorDeBarrasIntegrado } from "../../ventas/componentes/ChecadorDeBarras";
import { useContextoInventarios } from "../../../Contextos/ContextoInventarios";

export const EntradaProductoUxV2 = ({ catalogo }) => {
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState(catalogo[0]);
  const { catalogoV2 } = useContextoGeneral();
  const { etiquetasAGenerar, setEtiquetasAGenerar } = useContextoInventarios();

  const handleCodigoDetectado = (codigo) => {
    const objetoEncontrado = catalogoV2.find(objeto => objeto.id == codigo);

  
    if (objetoEncontrado) {

      setEtiquetasAGenerar(prevCarrito => {
        const existeProducto = prevCarrito.find(item => item.id == codigo);
        if (existeProducto) {
          // Si el producto ya existe, incrementa la cantidad
          return prevCarrito.map(item =>
            item.id == codigo ? { ...item, cantidad: 1 } : item
          );
        } else {
          // Si el producto no existe, agrégalo al carrito
          return [...prevCarrito, { ...objetoEncontrado, cantidad: 1 }];
        }
      });
      
    }
  };
  return (
    <ContenedorVentasStyled>

      <SeccionCategoria>
        <ChecadorDeBarrasIntegrado onProductoSeleccionado={handleCodigoDetectado} />
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

        </ContenedorItems>
      </SeccionItems>

      <SeccionCarrito>
        <H2Pos >Etiquetas</H2Pos>
        <Etiquetas />

      </SeccionCarrito>
    </ContenedorVentasStyled>
  )
};
