
import { Login } from './assets/Paginas/login';
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
    path: '*',
    element: <Login />,
    name: 'Auth',
    requiredPermission: [],
  }
];
