import React, { useEffect, useState,useReducer } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { InitialState, crudReducer } from "../reducers/CrudReducers";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { useSelector,useDispatch } from "react-redux";
import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types";

// VER QUE EN CRUDAPIX SE PUEDE PONER MÁS DOGMÁTICO CON REDUX 
// yese va con CrudActions X


const CrudApi = () => {
  //const [db, setDb] = useState(null);
  // DATA TO EDIT NO TIENE SENTIDO USAR REDUX
//const [state, dispatch] = useReducer(crudReducer, crudInitialState);
const state = useSelector((state) => state);
const dispatch = useDispatch();
console.log(state)
let {db}=state.crudReducer;
  //acordarseque el 3er parámetro es init y solo se usa si voy a transformar el state
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
//acordarse que con useRedux NO se pueden hacer 
// peticiones asíncronas.. por eso NO SE PONEN EN USEREDUX
  let api = helpHttp();
  let url = "http://localhost:5000/santos";
// acordarse que esto NO se puede poner en el reducer
// porque el reducer función PURA .. NO ASÍNCRONAS
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch({type:READ_ALL_DATA,payload:res})
          setError(null);
        } else {
          //setDb(null);
          dispatch({type:NO_DATA})
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch({type:CREATE_DATA,payload:res})
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
       // let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);
        console.log(data)
        dispatch({type:UPDATE_DATA,payload:data})
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          /*let newData = db.filter((el) => el.id !== id);
          setDb(newData) ;*/
         dispatch({type:DELETE_DATA,payload:id})
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API con HOOK REDUX</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;