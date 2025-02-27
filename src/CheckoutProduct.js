import React from 'react'
import { useStateValue } from './StateProvider'
import './checkoutProduct.css'
const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch] = useStateValue();
    const remove_from_basket = () => {
        //remove items from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className= "checkoutProduct__image" src= {image} alt = ""/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
               <small>₹</small>
               <strong>{price}</strong>
            </p>

            <div className='checkoutProduct__rating'>
            {
                Array(rating).fill().map((_) => (
                    <p>⭐</p>
                ))
            }
            </div>

            <button onClick={remove_from_basket}>Remove From Basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct