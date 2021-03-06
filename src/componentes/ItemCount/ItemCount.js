import React, { useState} from 'react'
import "./ItemCount.css"
import {Link} from "react-router-dom"


const ItemCount = ({item, stock, initial, addItem}) => {
    const [cantidad, setCantidad] = useState(initial)

    const sumarCantidad = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        } 
    }


   const restarCantidad = () => {
       if (cantidad > 0){
           setCantidad(cantidad - 1);
       } 
   }


   const saveToCart = () => {
       localStorage.setItem("Producto Lista",JSON.stringify([cantidad]))
   } 

    return (
        <>
         <div className="containerSumRestCantidad">
             <button onClick={restarCantidad}>-</button> 
             {
             cantidad > stock ? <p>{setCantidad(stock)}</p> : <p>{cantidad}</p>
             }
             <button onClick={sumarCantidad}>+</button>
         </div>
         {
             cantidad > 0 && stock > 0  ? <button className="addToCart" onClick={() => addItem(item, cantidad)}>Sumar al carrito</button> : <button className="addToCart" disable="disable">Sumar al carrito</button>
         }
         {
             cantidad <= stock ? <button className="buyNow" onClick={saveToCart}><Link  className="linkBuyNow" to="/Cart">Comprar ahora</Link></button> : <button className="buyNow" disable="disable">Comprar ahora</button>
         }
        </>
    )
}

export default ItemCount