import { Provider } from "react-redux";
import "./App.css";

import { Table, Form } from "./components";
import { store } from "./store";

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Form />
      <Table />
    </Provider>
  </div>
);

export { App };
