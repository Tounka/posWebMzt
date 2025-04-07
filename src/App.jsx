import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './App.css';

import { LayoutApp } from './assets/ComponentesGenerales/Genericos/layouts.jsx';
import { MenuLateral } from './assets/ComponentesGenerales/MenuLateral/MenuLateral';

import { routesConfig } from './routes.jsx';
import { UpdatePWA } from './assets/ComponentesGenerales/DetectarActualizacion.jsx';
import { useContextoGeneral } from './assets/Contextos/ContextoGeneral.jsx';
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
function App() {
  const { user } = useContextoGeneral();

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>

      <LayoutApp user={user}>
        {user && <MenuLateral user={user} />}
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        {/* <UpdatePWA /> */}
      </LayoutApp>
    </StyleSheetManager>
  );
}


export default App;