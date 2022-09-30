import React from 'react'
import { ADD_TO_CART,REMOVE_ONE_FROM_CART,REMOVE_ALL_FROM_CART,CLEAR_CART } from "../types";
export const initialState={
    products:[
        {id:1,name:"producto1",price:100},
        {id:2,name:"producto2",price:200},
        {id:3,name:"producto3",price:300},
        {id:4,name:"producto4",price:400},
        {id:5,name:"producto5",price:500},
        {id:6,name:"producto6",price:600},
        {id:7,name:"producto7",price:700},
        {id:8,name:"producto8",price:800},
        {id:9,name:"producto9",price:900}
    ]
  ,
    cart:[]
}

export function shoppingReducer(state=initialState,action){
   
    // recibe el estado y una acción
    // siempre SI O SI RETORNA EL ESTADO
    // action tiene 2 valores: el tipo de acción  y el 
    // payload que es opcional y es el valor que le pasamos
    // para ejecutar esa acción
 
    switch (action.type) {      
        case REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
        }
        case ADD_TO_CART:{
            //recibe el id
            let newItem= state.products.find(product=>product.id === action.payload)
           // console.log("el nuevo item es( = "+ newItem)
            
            
                let itemInCart = state.cart.find((item) => item.id === newItem.id);

                return itemInCart
                  ? {
                      ...state,
                      cart: state.cart.map((item) =>
                        item.id === newItem.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                      ),
                    }
                  : {
                      ...state,
                      cart: [...state.cart, { ...newItem, quantity: 1 }],
                    };  
            
            // aquí en return estoy retornando un objeto
        }
        case REMOVE_ALL_FROM_CART: {
            return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };
          }
        case CLEAR_CART:
            return initialState;
        default:
            return state
          
    }
    //return state
    };
