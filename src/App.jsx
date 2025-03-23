import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router'; 
import './App.css';

import { LayoutApp } from './assets/ComponentesGenerales/Genericos/layouts.jsx';
import { MenuLateral } from './assets/ComponentesGenerales/MenuLateral/MenuLateral';

import { routesConfig } from './routes.jsx';
import { UpdatePWA } from './assets/ComponentesGenerales/DetectarActualizacion.jsx';
function App() {
  const [user, setUser] = useState(true);

  return (
    <LayoutApp user={user}>
      {user && <MenuLateral user={user} />}
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* <UpdatePWA /> */}
    </LayoutApp>
  );
}


export default App;