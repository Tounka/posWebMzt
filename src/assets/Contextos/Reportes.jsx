import { createContext, useContext, useEffect, useState } from "react";
import { useContextoGeneral } from "./ContextoGeneral";
import { obtenerTickets } from "../dbConection/m-tickets";
import { obtenerInventarios } from "../dbConection/m-inventarios";

const ContextoReportes = createContext();

export const ContextoReportesProvider = ({ children }) => {
  const { user } = useContextoGeneral();
  const [ticketsPorDias, setTicketsPorDias] = useState([]);

  const [inventarios, setInventarios] = useState([])

  useEffect(() => {
    const cargarTickets = async () => {
      if (user?.rol === "administrador") {
        const tickets = await obtenerTickets({ diasAObtener: 3 });
        const inventariosDb = await obtenerInventarios();
        setInventarios(inventariosDb);
        setTicketsPorDias(tickets);

      }
    };

    cargarTickets();
  }, [user]);

  return (
    <ContextoReportes.Provider value={{ ticketsPorDias, setTicketsPorDias, inventarios}}>
      {children}
    </ContextoReportes.Provider>
  );
};

export const useContextoReportes = () => {
  return useContext(ContextoReportes);
};
