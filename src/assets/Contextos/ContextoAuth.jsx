import React, { createContext, useContext, useState, useEffect } from 'react';
import { useContextoGeneral } from './ContextoGeneral';
import { userData } from './dataDesarollo';
import { useLocation, useNavigate } from 'react-router';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const { setUser, user } = useContextoGeneral();
  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    
    if (!user && location.pathname !== "/login") {
      Navigate("/login");
    }
  }, [location, Navigate, user]);


  const login = async (credenciales) => {
    const validateUser = (credenciales) => {
      const usuario = userData.find(user => credenciales.correo === user.correo);
      if (usuario) {
        if (credenciales.contraseña === usuario.contraseña) {
          return usuario; 
        } else {
          console.log("Contraseña incorrecta");
          return null; 
        }
      } else {
        console.log("Usuario no encontrado");
        return null; 
      }
    };
  
    const usuarioValidado = validateUser(credenciales);
  
    if (usuarioValidado) {
      setUser(usuarioValidado); 
      Navigate("/"); 
    } else {
      console.log("Credenciales incorrectas");

    }
  };

  const logout = () => {
    setUser(null);
  };



  return (
    <AuthContext.Provider value={{ login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
