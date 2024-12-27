import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{basket}] = useStateValue();
  return (
    
    <div className='checkout'>

        <div className='checkout__left'>  
        <img 
        className='checkout__ad'
        src = "https://tse2.mm.bing.net/th?id=OIP.aSNODBNqKNT-vIzZDNiCYQHaB5&pid=Api&P=0&h=220"
        alt=""
        />
        {basket.length === 0 ? (
            <div>
                <h2>Your shopping basket is empty</h2>
            </div>
        ): (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {/* {all checkout products} */}
                {basket.map(item => (
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
            </div>
        )} 
        </div>

        {basket.length > 0 && (
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        )}

    </div>
  )
}

export default Checkout