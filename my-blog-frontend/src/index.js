import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUHOhOz8nxCbJJIXtnmFMHb1WO7y6xxmI",
  authDomain: "my-react-blog-45b7a.firebaseapp.com",
  projectId: "my-react-blog-45b7a",
  storageBucket: "my-react-blog-45b7a.appspot.com",
  messagingSenderId: "669769286288",
  appId: "1:669769286288:web:0370a5b47ab29de88a4e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
