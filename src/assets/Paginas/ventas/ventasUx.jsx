import { H2Pos, TxtGenerico } from "../../ComponentesGenerales/Genericos/titulos";
import { ContenedorCategoria, SeccionItems, SeccionCarrito, ContenedorVentasStyled, SeccionCategoria, ContenedorItems } from "./componentes/ContenedoresPaginaVentas";
import { ItemCategoria, ItemProducto } from "./componentes/ItemCategoria";
import { Carrito } from "./componentes/Carrito";
import { useContextoGeneral } from "../../Contextos/ContextoGeneral";
import { useState } from "react";
import { ChecadorDeBarras } from "./componentes/ChecadorDeBarras";
import { useContextoPaginaVenta } from "./ContextoVenta";

export const VentasUx = ({ catalogo }) => {
  const { setProductosEnVenta, setCarrito } = useContextoPaginaVenta();
  const { catalogoV2 } = useContextoGeneral();
  const [catalogoSeleccionado, setCatalogoSeleccionado] = useState(catalogo[0]);

  const handleCodigoDetectado = (codigo) => {
    const objetoEncontrado = catalogoV2.find(objeto => objeto.id == codigo);

    //cambiar por deconstruir(codigo).idProducto
    if (objetoEncontrado) {
      // Actualizar productos en venta
      setProductosEnVenta(prevProductosEnVenta =>
        prevProductosEnVenta.map(categoria => ({
          ...categoria,
          items: categoria.items.map(item =>
            item.id == codigo ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        }))
      );
  
      // Actualizar carrito
      setCarrito(prevCarrito => {
        const existeProducto = prevCarrito.find(item => item.id == codigo);
        if (existeProducto) {
          // Si el producto ya existe, incrementa la cantidad
          return prevCarrito.map(item =>
            item.id == codigo ? { ...item, cantidad: item.cantidad + 1 } : item
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

            <ItemProducto producto={item} />
          ))}


        </ContenedorItems>
      </SeccionItems>


      <ChecadorDeBarras onCodigoDetectado={handleCodigoDetectado} />

      <SeccionCarrito>
        <H2Pos >Carrito</H2Pos>
        <Carrito />
      </SeccionCarrito>
    </ContenedorVentasStyled>
  )
};
