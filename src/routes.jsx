
import { Inventarios } from './assets/Paginas/Inventarios';
import { GenerarInventario } from './assets/Paginas/Inventarios/spGenerarInvetarios';
import { Login } from './assets/Paginas/login';
import { Reportes } from './assets/Paginas/Reportes';
import { Tickets } from './assets/Paginas/Reportes/spTickets.jsx';
import { Usuarios } from './assets/Paginas/usuarios';
import { Ventas } from './assets/Paginas/ventas';
import { AgregarUsuario } from './assets/Paginas/ventas/spAgregarUsuario';

export const routesConfig = [
  {
    path: '/',
    element: <Ventas />,
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
