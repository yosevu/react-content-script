import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css"; 
import App from "./App";

const app = document.createElement("div");
app.id = "root";

document.body.prepend(app);

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
