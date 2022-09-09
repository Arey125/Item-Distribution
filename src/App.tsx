import { Provider } from "react-redux";
import "./App.css";

import { Table, Form } from "./components";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Form />
      <Table />
    </div>
  </Provider>
);

export { App };
