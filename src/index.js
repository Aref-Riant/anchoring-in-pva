import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Greet from "./pages/greet";
import RegForm from "./pages/regform";
import Demo from "./pages/demo";
import Test from "./pages/test";
import Thanks from "./pages/thanks";
import Training from "./pages/training"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Greet /> } />
    <Route path="/1" element={ <RegForm /> } />
    <Route path="/2" element={ <Demo /> } />
    <Route path="/2-training" element={ <Training /> } />
    <Route path="/3" element={ <Test /> } />
    <Route path="/4" element={ <Thanks /> } />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
