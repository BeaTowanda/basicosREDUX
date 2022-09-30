
import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, READ_ONE_DATA, UPDATE_DATA } from "../types";

export const InitialState={
    db:null
}

export function crudReducer(state=InitialState,action){
    console.log("en reducer el state : " + state)
switch (action.type) {
    case READ_ALL_DATA:{
       // console.log(action.payload)
        return{
            ...state,
            db:action.payload.map((data)=>data)
        }
    }

    case READ_ONE_DATA:{
        return{
            ...state,
            db:action.payload.find(data =>data.id === action.payload)
        }
    }
    case DELETE_DATA:{
        let newData = state.db.filter((el) => el.id !== action.payload);
        return{
            ...state,
            db:newData
            
        }
    }
        
            break;
    case UPDATE_DATA:{
        console.log(action.payload)
        let newData = state.db.map((el) => (el.id === action.payload.id ? action.payload : el))
        return{
           ...state,
           db:newData
        }
    }

    case CREATE_DATA:{
        return{
            ...state,
            db:[...state.db,action.payload]
        }
    }
  
    case NO_DATA:
        return InitialState;
    default:
        return state;
}

}