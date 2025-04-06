import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 👈 Importa Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyAW0_X2YaTq32vwbIHQs1vDklc7UJnD5Bg",
  authDomain: "posram-68199.firebaseapp.com",
  projectId: "posram-68199",
  storageBucket: "posram-68199.firebasestorage.app",
  messagingSenderId: "865350928194",
  appId: "1:865350928194:web:b6c026685cdae64f93eadb",
  measurementId: "G-39K9VSJKR6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const auth = getAuth(app);

export { db, auth };
