import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";

var mountNode =  ReactDOM.createRoot(document.getElementById("app"))
mountNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
