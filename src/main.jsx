import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CardProvider, CartContext } from "./assets/context/Card-context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
export { CartContext };
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <Router>
        <App />
      </Router>
    </CardProvider>
  </React.StrictMode>
);
