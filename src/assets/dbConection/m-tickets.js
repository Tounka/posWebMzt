import { addDoc, arrayUnion, doc, updateDoc, collection, Timestamp, where, query, getDocs, getDoc, limit } from "firebase/firestore";
import { db } from "./firebase";
import { convertirTimestampAMazatlan } from "../Fn/ObtenerFechaHora";

export const agregarTicket = async (ticket, cajaId) => {
  try {

    const docRef = await addDoc(collection(db, "tickets"), {
      ...ticket,
      fecha: Timestamp.now(),
    });
    const cajaRef = doc(db, "cajas", String(cajaId));
    await updateDoc(cajaRef, {
      tickets: arrayUnion(ticket),
    })
  } catch (error) {
    alert("Error al subir ticket");
    console.error(error);
  }
};
export const obtenerTickets = async ( {diasAObtener} ) => {
  const ticketsRef = collection(db, "tickets");


  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0); 
  const fechaLimite = new Date(hoy);
  fechaLimite.setDate(hoy.getDate() - diasAObtener);

  const fechaFirebase = Timestamp.fromDate(fechaLimite);


  const q = query(ticketsRef, where("fecha", ">=", fechaFirebase));

  try {
    const querySnapshot = await getDocs(q);
    const tickets = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      
    }));
    return tickets;
  } catch (error) {
    console.error("Error obteniendo tickets:", error);
    return [];
  }
};

export const obtenerTicketPorId = async (id) => {
  const docRef = collection(db, "tickets");
  const q = query(docRef, where("id", "==", id), limit(1));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const ticket = querySnapshot.docs[0].data();

      return ticket;
    } else {
      return "Ticket no encontrado";
    }
  } catch (error) {
    console.error("Error al obtener ticket:", error);
    return null;
  }
};