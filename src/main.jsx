import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CardProvider, CartContext } from "./context/Card-context.jsx";
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
