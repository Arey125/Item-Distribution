import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { store } from "./store";

const container = document.getElementById("root");
if (container === null) {
  throw new Error();
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  container
);
