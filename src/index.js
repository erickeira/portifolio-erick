import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import './reset.css';
import Header from './header';
import Apresentacao from './apresentacao';
import Sobre from './sobre';
import Skills from './skills';
import Laboratorio from './laboratorio';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Apresentacao />
    <Sobre />
    <Skills />
    <Laboratorio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

