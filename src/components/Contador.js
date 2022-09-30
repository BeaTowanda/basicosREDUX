import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  sumar,
  restar,
  sumar5,
  restar5,
  reset,
} from "../actions/contadorActions";
import reducers from "../reducers";
import "../hojas-de-estilo/contador.css";

const Contador = () => {
  // el use selector es lo que me permite acceder al store
  /* useSelector es una función de alto orden que como primer parámetro recibe otra función y esta recibe 
    nuestro estado, para que posteriormente nosotros le indiquemos 
    qué propiedad nos debe devolver. */
  const state = useSelector((state) => state);
  console.log(state.contador);
  console.log(state.contador.initialState)
  //console.log(state)
  const dispatch = useDispatch();
  // el use Dispatch en realidad espera una función pero
  // se la paso en el ONCLIK
// lo que no estoy  pudiendo poner es el initial State.-- no me lo trae
  return (
    <div>
      <h2>El estado es : {state.contador}</h2>
     
      <nav>
        <button className="click" onClick={() => dispatch(sumar5())}>
          +5
        </button>
        <button className="click" onClick={() => dispatch(sumar())}>
          +1
        </button>
        <button className="click resetea" onClick={() => dispatch(reset())}>
          =0
        </button>
        <button className="click menos" onClick={() => dispatch(restar5())}>
          -5
        </button>
        <button className="click menos" onClick={() => dispatch(restar())}>
          -1
        </button>
      </nav>
     
    </div>
  );
};

export default Contador;
