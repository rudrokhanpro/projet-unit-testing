import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import AuthProvider from "./components/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);