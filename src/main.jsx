import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPbBu1AawZsu-R91HH0SxPp5FuFpYh6og",
  authDomain: "react-com-57760.firebaseapp.com",
  projectId: "react-com-57760",
  storageBucket: "react-com-57760.appspot.com",
  messagingSenderId: "466097607470",
  appId: "1:466097607470:web:4d48555783fda78ae760bf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
