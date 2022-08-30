import { legacy_createStore as createStore} from 'redux'
import reducer from "./reducers/rootReducer";
import initialState from "./initialState"

const store = createStore(reducer, initialState);

export default store;

export * from './reducers/rootReducer'




