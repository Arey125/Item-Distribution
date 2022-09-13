import { Provider } from "react-redux";
import "./app.css";

import { Items } from "widgets";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Items />
    </div>
  </Provider>
);

export { App };
