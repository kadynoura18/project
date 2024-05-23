import React from 'react'
import "../../styles/cart.css";


function CartItems({item}) {
   

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
            <button>retirer du pannier</button>
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
