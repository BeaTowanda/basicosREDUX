import React from 'react';
import "../hojas-de-estilo/shopping.css";

const ProductItem = ({data,addToCart}) => {
    console.log (data)
   let {id,name,price} = data
  
  return (
   <div>
        <div className='productoDes'>
            <h3>Item: {data.id}</h3>
            <h2 className='nombreProd'>  {data.name}</h2>
            <h3 >Precio : ${data.price}</h3>  
            <button  className='agregar'  onClick={()=>addToCart(id)}>Agregar a Carrito</button>
        </div>
    </div>
  )
}

export default ProductItem