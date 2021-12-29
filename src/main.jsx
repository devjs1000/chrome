import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MainContext from "./mainContext";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContext>
        <App />
      </MainContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
