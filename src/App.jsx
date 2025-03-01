import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router'; 
import './App.css';

import { LayoutApp } from './assets/ComponentesGenerales/layouts';
import { MenuLateral } from './assets/ComponentesGenerales/MenuLateral/MenuLateral';

import { routesConfig } from './routes.jsx';
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
    </LayoutApp>
  );
}


export default App;