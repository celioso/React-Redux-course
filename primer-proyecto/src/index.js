import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello, React 😸😸!</h1>
    <p>Para la prueba de </p>
  </React.StrictMode>
);*/


function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello name="Mario" />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();