
import { Inventarios } from './assets/Paginas/Inventarios';
import { AgregarProducto } from './assets/Paginas/Inventarios/spAgregarProducto/index.jsx';
import { EntradaProducto } from './assets/Paginas/Inventarios/spEntradaProducto/spGenerarInvetarios/index.jsx';
import { GenerarInventario } from './assets/Paginas/Inventarios/spGenerarInvetarios';
import { Productos } from './assets/Paginas/Inventarios/spProductos/index.jsx';
import { Login } from './assets/Paginas/login';
import { Reportes } from './assets/Paginas/Reportes';
import { Tickets } from './assets/Paginas/Reportes/spTickets.jsx';
import { Usuarios } from './assets/Paginas/usuarios';
import { Ventas } from './assets/Paginas/ventas';
import { AgregarUsuario } from './assets/Paginas/usuarios/spAgregarUsuario/index.jsx';
import { GenerarTicket } from './assets/Paginas/ventas/spGenerarTicket/index.jsx';

export const routesConfig = [
  {
    path: '/',
    element: <Ventas />,
    name: 'Auth',
    requiredPermission: ['empleado', 'admin'],
  }, {
    path: '/generar-ticket',
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
    name: 'Auth',
    requiredPermission: [],
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
    path: '/usuarios',
    element: <Usuarios />,
    name: 'Auth',
    requiredPermission: [],
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
    path: '*',
    element: <Login />,
    name: 'Auth',
    requiredPermission: [],
  }
];
