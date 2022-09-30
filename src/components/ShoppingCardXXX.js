import React from 'react';
import "../hojas-de-estilo/shopping.css";
import { BiBasket } from "react-icons/bi";

import ProductItem from './ProductItem';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart,delFromCart,clearCart } from '../actions/shoppingActions';
import CartItem from './CardItem';



const ShoppingCard = () => {
    
//const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
//const state = useSelector((state) => state);
const state = useSelector((state) => state);

const dispatch= useDispatch();

//const { products,cart }=state.shopping;
const { products, cart } = state;


/*const addToCart =(id)=>{
    console.log(id);
    dispatch({type:TYPES.ADD_TO_CART, payload:id })
};
const delFromCart=(id,all=false)=>{
    if(all){
    dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id })
    } else{dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})}
};
const clearCart=()=>{
    dispatch({type:TYPES.CLEAR_CART})
};*/


  return (
   
    <div className='box'>
      <h2 className='carrito'>SHOPPING CARD</h2>
        <h3>Productos <BiBasket className='bag'/></h3>   
        <article className='cajaProductos'>
            {products?products.map ((product)=>(
            <ProductItem key={product.id} data={product} addToCart={dispatch(addToCart(product.id))} />
        )):<h3>Sin Productos</h3>
        }
      
        <h3 className='contCarrito'>CARRITO</h3>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
        
        <button className="botonLimpia" onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>    
        
        </article>
    </div>
  )
}

export default ShoppingCard