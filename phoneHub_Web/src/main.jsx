// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
