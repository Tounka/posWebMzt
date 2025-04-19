import React, { createContext, useContext, useState, useEffect } from 'react';
import { useContextoGeneral } from './ContextoGeneral';
import { useLocation, useNavigate } from 'react-router';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../dbConection/firebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
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
    try {
      // 1. Iniciar sesión con email y contraseña
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credenciales.correo,
        credenciales.contraseña
      );
  
      const usuario = userCredential.user;
      
      // 2. Buscar información adicional en la colección "empleados"
      const db = getFirestore();
      const empleadoRef = doc(db, "usuarios", usuario.uid);
      const empleadoSnap = await getDoc(empleadoRef);
  
      if (empleadoSnap.exists()) {
        const empleadoData = empleadoSnap.data();
        setUser({
          ...usuario,
          ...empleadoData 
        });
        Navigate("/");
      } else {
        // Si no existe en empleados, puedes cerrar sesión o manejar el caso
        console.log("El usuario no está registrado como empleado");
        await auth.signOut();
        setUser(null);
      }
      
    } catch (error) {
      console.log("Error de login:", error.message);
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
