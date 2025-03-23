
import { Inventarios } from './assets/Paginas/Inventarios';
import { AgregarProducto } from './assets/Paginas/Inventarios/spAgregarProducto/index.jsx';
import { EntradaProducto } from './assets/Paginas/Inventarios/spEntradaProducto/index.jsx';
import { GenerarInventario } from './assets/Paginas/Inventarios/spGenerarInvetarios';
import { Productos } from './assets/Paginas/Inventarios/spProductos/index.jsx';
import { Login } from './assets/Paginas/login';
import { Reportes } from './assets/Paginas/Reportes';
import { Tickets } from './assets/Paginas/Reportes/spTickets.jsx';
import { Usuarios } from './assets/Paginas/usuarios';
import { Ventas } from './assets/Paginas/ventas';
import { AgregarUsuario } from './assets/Paginas/usuarios/spAgregarUsuario/index.jsx';
import { GenerarTicket } from './assets/Paginas/ventas/spGenerarTicket/index.jsx';
import { ReporteInventarios } from './assets/Paginas/Reportes/spInventarios/index.jsx';
import { ReporteVentas } from './assets/Paginas/Reportes/spVentas/index.jsx';


import { BsCashStack } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Logout } from './assets/Paginas/login/logout.JSX';
import { GenerarEtiqueta } from './assets/Paginas/Inventarios/spEntradaProducto/spGenerarEtiqueta/index.jsx';

import { GrConfigure } from "react-icons/gr";


export const routesConfig = [
  {
    path: '/venta',
    element: <Ventas />,
    name: 'Auth',
    isMenuPath: { icon: <BsCashStack />, txt: "Venta", to: "/venta" },
    requiredPermission: ['empleado', 'administrador'],
  }, {
    path: '/venta/generar-ticket',
    element: <GenerarTicket />,
    name: 'Auth',
    requiredPermission: ['empleado', 'admin'],
  },
  {
    path: '/login',
    element: <Login />,
    name: 'Auth',
    requiredPermission: [],
  },

  {
    path: '/inventario',
    element: <Inventarios />,
    isMenuPath: { icon: <HiOutlineClipboardList />, txt: "Inventario", to: "/inventario" },
    name: 'Auth',
    requiredPermission: ['empleado', 'administrador'],
  },
  {
    path: '/inventario/generar-inventario',
    element: <GenerarInventario />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '/inventario/productos',
    element: <Productos />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '/inventario/productos/agregar-producto',
    element: <AgregarProducto />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '/inventario/entrada-producto',
    element: <EntradaProducto />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '/inventario/entrada-producto/generar-etiqueta',
    element: <GenerarEtiqueta />,
    name: 'Auth',
    requiredPermission: [],
  },

  {
    path: '/usuarios',
    element: <Usuarios />,
    isMenuPath: { icon: <FaUser />, txt: "Usuarios", to: "/usuarios" },
    name: 'Auth',
    requiredPermission: ['administrador'],
  },
  {
    path: '/usuarios/agregar-usuario',
    element: <AgregarUsuario />,
    name: 'Auth',
    requiredPermission: [],
  },

  {
    path: '/reportes',
    element: <Reportes />,
    isMenuPath: { icon: <FiFileText />, txt: "Reportes", to: "/reportes" },
    name: 'Auth',
    requiredPermission: ['administrador'],
  },
  {
    path: '/reportes/inventarios',
    element: <ReporteInventarios />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '/reportes/tickets',
    element: <Tickets />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '/reportes/ventas',
    element: <ReporteVentas />,
    name: 'Auth',
    requiredPermission: [],
  },
  {
    path: '*',
    element: <Login />,
    name: 'Auth',
    requiredPermission: [],
  },


  {
    path: '/logout',
    element: <Logout />,
    isMenuPath: { icon: <RiLogoutCircleLine />, txt: "Salir", to: "/logout" },
    name: 'Auth',
    requiredPermission: ['administrador', 'empleado'],
  },


];
