import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./App";

const container = document.getElementById("root");
if (container === null) {
  throw new Error();
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
