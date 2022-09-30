
import { Provider } from 'react-redux';
import './App.css';
import Contador from './components/Contador';
import CrudApi from './components/CrudApi';
import ShoppingCart from './components/ShoppingCart';
import store from "./store"

function App() {
  return ( 
    <Provider store={store}>
    {/*<div className="App">
      <h1>Redux </h1>
      <Contador/>
    </div>*/}
    <div className="App">
      <h1>Redux-carrito </h1>
      <ShoppingCart/>
    </div>
    <h1>CRUD API </h1>
    <CrudApi/>
    </Provider>
  );
}

export default App;
