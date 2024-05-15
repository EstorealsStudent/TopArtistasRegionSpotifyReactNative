// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVilgUTBpLWlvACUQe7eHypT3_NkwuexM",
  authDomain: "topartistasreact.firebaseapp.com",
  projectId: "topartistasreact",
  storageBucket: "topartistasreact.appspot.com",
  messagingSenderId: "182085879986",
  appId: "1:182085879986:web:e3d62f8177707b2ab661ab"
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase