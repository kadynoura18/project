import {ShoppingCartAction } from "../../store/Shopping-cart-slice";
import React from 'react'
import "../../styles/cart.css";
import { useDispatch } from 'react-redux';


function CartItems({item}) {
  const dispatch=useDispatch() ;
const handleRemoveItem=()=>{
    dispatch(ShoppingCartAction.removeItemToCart(item.id))
}
    return (
        <div className='cart-item'>
           <div className="left-partt">
            <div className='itemImage'>
                <img src={item.cover} alt="" />
            </div>
            <div className="prixx">
            <div className="itemmName">
                {item.title}
            </div>
            <p>
                {item.quantity} x {item.price}
            </p>
            <button  onClick={handleRemoveItem} >retirer du pannier</button>
            </div>
           </div>
           <div className="right-partt">
            <div className="selector">
                <button className=" Accept">Accepter</button>
               
                <button className="Refuser">Refuser</button>
            </div>
            <div className="totall">
                {item.price* item.quantity}
            </div>
           </div>
        </div>
        
    )
}

export default CartItems
