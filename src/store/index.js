/*import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore({reducer});

store.suscribe(()=> console.log(store))
// es método suscribe es un método del store que 
// es un listener.. informa cada vez que cambia el estado
export default store;*/
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer,composeWithDevTools());

store.subscribe(() => console.log(store));

export default store;

