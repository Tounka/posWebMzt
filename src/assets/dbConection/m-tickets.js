import { addDoc, arrayUnion, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const agregarTicket = async (ticket,cajaId) => {
    try {
        
        const docRef = await addDoc(collection(db, "tickets"), {
          ...ticket
        });
        const cajaRef = doc(db, "cajas", String(cajaId));
        await updateDoc(cajaRef,{
          tickets: arrayUnion(ticket),
        })
        console.log("Ticket agregado con ID: ", docRef.id);
      } catch (error) {
        alert("Error al subir ticket");
        console.error(error);
      }
  };