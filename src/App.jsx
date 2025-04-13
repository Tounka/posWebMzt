import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './App.css';

import { LayoutApp } from './assets/ComponentesGenerales/Genericos/layouts.jsx';
import { MenuLateral } from './assets/ComponentesGenerales/MenuLateral/MenuLateral';

import { routesConfig } from './routes.jsx';
import { useContextoGeneral } from './assets/Contextos/ContextoGeneral.jsx';
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { obtenerDiaEnOperacion } from './assets/dbConection/m-dias.js';
import { Loading } from './assets/ComponentesGenerales/Genericos/Loading.jsx';
function App() {
  const { user,setDiaEnOperacion,diaEnOperacion } = useContextoGeneral();
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const diaEnOperacion = await obtenerDiaEnOperacion();
        setDiaEnOperacion(diaEnOperacion);
      } catch (error) {
        alert("No se ha podido obtener la información del día en operación");
      }
    };
  
    obtenerDatos();
  }, []);
  if(Object.keys(diaEnOperacion).length === 0){return(<Loading />);} 
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