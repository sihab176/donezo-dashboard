// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKOyg4hHAPbicOmMrXR360MQDPNaXN_os",
  authDomain: "denezodashbord.firebaseapp.com",
  projectId: "denezodashbord",
  storageBucket: "denezodashbord.firebasestorage.app",
  messagingSenderId: "667127731376",
  appId: "1:667127731376:web:f42e996df9af2eb83e1775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth= getAuth(app)