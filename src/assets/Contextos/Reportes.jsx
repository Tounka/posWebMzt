import { createContext, useContext, useEffect, useState } from "react";
import { useContextoGeneral } from "./ContextoGeneral";
import { obtenerTickets } from "../dbConection/m-tickets";

const ContextoReportes = createContext();

export const ContextoReportesProvider = ({ children }) => {
  const { user } = useContextoGeneral();
  const [ticketsPorDias, setTicketsPorDias] = useState([]);

  useEffect(() => {
    const cargarTickets = async () => {
      if (user?.rol === "administrador") {
        const tickets = await obtenerTickets({ diasAObtener: 3 });
        setTicketsPorDias(tickets);
        console.log(tickets, "todos los tickets");
      }
    };

    cargarTickets();
  }, [user]);

  return (
    <ContextoReportes.Provider value={{ ticketsPorDias, setTicketsPorDias }}>
      {children}
    </ContextoReportes.Provider>
  );
};

export const useContextoReportes = () => {
  return useContext(ContextoReportes);
};
