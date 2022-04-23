import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
