import {FC} from 'react'
import './App.css';
import Table from './components/Table'
import Form from "./components/Form";
import {Provider} from "react-redux";
import store from "./store/store";

const App : FC = () => {

  return (
      <div className="App">
          <Provider store={store}>
            <Form />
            <Table />
          </Provider>
      </div>
  );
}


export default App;