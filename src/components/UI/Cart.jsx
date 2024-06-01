import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import CartItems from './CartItems'


function Cart(props: Props) {
    const items= useSelector ((state)=> state.shoppingCart.items)
    let content = <p>Panier vide </p>
    if (items.length>0) {
        content =(
            <div className='cart-items'>
                <h1>mes élements</h1>
                {items.map((item)=>(
                    <CartItems key={item.id} item={item}/>
                ))}

            </div>
        )
        
    }
    const {} = props

    return (
        <div className='shopping-cart'>
            <h1> Panier ({items.length})  élements</h1>
            {content}
        </div>
    )
}

export default Cart
