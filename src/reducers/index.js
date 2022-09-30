// centraliza todos los reducer por eso llamo a combine reducers

import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./CrudReducers";
import { shoppingReducer } from "./shoppingReducer";

const reducer = combineReducers({
    contador:contadorReducer,
    shopping:shoppingReducer,
    crudReducer: crudReducer
});
console.log(crudReducer.crudReducer)


export default reducer;
