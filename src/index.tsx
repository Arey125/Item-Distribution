import React from "react";
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./App";

const container = document.getElementById("root");
if (container === null) {
  throw new Error();
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
