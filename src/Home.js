import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <img 
            className='home__image'
            src = "https://tse2.mm.bing.net/th?id=OIP.reDVJWdQ6lNp2CtuMZSLnAHaEA&pid=Api&P=0&h=220"
            alt = "banner-img"
        />
        <div className='home__row'>
            <Product
                id="1234322"
                title="The Gathering Place Sign Wall Art Decor Wooden Framed Large Home Kitchen Simple And Beautiful Wall Hanging gather Decoration (Black)"
                price={1190}  // Pass as a number
                rating={5}
                image="https://m.media-amazon.com/images/I/81rIhRFGB3L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            /> 
            <Product
                id="12343234"
                title="Inch Dining Room Large Rustic Farmhouse Wood Framed Kitchen Home Wall Hanging Decoration (White)"
                price={11.90}  // Pass as a number
                rating={5}
                image="https://m.media-amazon.com/images/I/71HxsktlNnL._AC_SX679_.jpg"
            /> 
        </div>

        <div className='home__row'>
            <Product
                id="12343896"
                title="Apple 2023 iMac (24-inch, Apple M3 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 256GB) - Silver"
                price={139990}  // Pass as a number
                rating={5}
                image="https://m.media-amazon.com/images/I/312Ibrgl8zL._SX300_SY300_QL70_FMwebp_.jpg"
            /> 
            <Product
                id="123456"
                title="Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display"
                price={134900}  // Pass as a number
                rating={5}
                image="https://m.media-amazon.com/images/I/71WkDp--uqL._SX679_.jpg"
            /> 
            <Product
                id="12345679"
                title="Apple 2024 MacBook Pro Laptop with M4 Max chip with 14‑core CPU and 32‑core GPU: Built for Apple Intelligence"
                price={325990}  // Pass as a number
                rating={5}
                image="https://m.media-amazon.com/images/I/61opqQEBUxL._SX679_.jpg"
            /> 
        </div>

        <div className='home__row'>
            <Product
                id="5667980"
                title="Tapo TP-Link C210 360° 3MP Full HD 2304 X 1296P Video Pan/Tilt Smart Wi-Fi Security Camera | Alexa Enabled | 2-Way Audio"
                price={1699}  // Pass as a number
                rating={5}
                image="https://m.media-amazon.com/images/I/71Cycmv-QCL._SX679_.jpg"
            />             
        </div>
    </div>
  )
}

export default Home;
