/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';*/

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

//Fist ejample JSX

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello, React 😸😸!</h1>
    <p>Para la prueba de </p>
  </React.StrictMode>
);*/
 
// HTML DOM contador

/*import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0); // Estado del contador

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1); // Incrementa el contador correctamente
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []); // El efecto se ejecuta solo una vez

  return <p>{counter}</p>;
}

ReactDOM.render(<Counter />, document.getElementById("root"));*/
function Hello() {
  return <h1>Hello world.</h1>;
}

/*function Hello(props) {
  return <p>Hello, {props.name} como va su dia!</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello name="Mario" />);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();