import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScreenWidthContextProvider from "./context/ScreenWidthContext";
import AuthContextProvider from "./context/AuthContext";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename='/frontend-eindopdracht-novi'>
          <AuthContextProvider>
              <ScreenWidthContextProvider>
                  <App />
                  <ToastContainer autoClose={3000}/>
              </ScreenWidthContextProvider>
          </AuthContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
