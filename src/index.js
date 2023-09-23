import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE-hBzlmfIyicnxtnmYSbsNeyfKr5P6s4",
  authDomain: "myportfolio-e0b1f.firebaseapp.com",
  projectId: "myportfolio-e0b1f",
  storageBucket: "myportfolio-e0b1f.appspot.com",
  messagingSenderId: "1000976656092",
  appId: "1:1000976656092:web:e6efcc8ce98c6ca7377619",
  measurementId: "G-PR8MTR9121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
