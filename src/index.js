import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVHmKBMBp2DTgKdw5m2_V3YvABLSDZGvY",
  authDomain: "noco2-e46fa.firebaseapp.com",
  projectId: "noco2-e46fa",
  storageBucket: "noco2-e46fa.appspot.com",
  messagingSenderId: "132897901391",
  appId: "1:132897901391:web:9b4e1576f845a10a60133a",
  measurementId: "G-TWKRL8G2KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
