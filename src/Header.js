import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {

    const [{basket}] = useStateValue();
    console.log(basket);
    
  return (
    <nav className='header'>
       <Link to = "/">
            <img 
                className='header__logo'
                src = "https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg" alt= "logo"/>
       </Link>
        <div className='header__search'>
        {/* {search box} */}
        <input type = "text" placeholder='search something here...' className='header_searchInput'/>
        <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <Link to = "/login" className='Header__link'>
                <div className= "header__option">
                    <span className='header__optionLine1'>Hello</span>
                    <span className='header__optionLine2'>Sign In</span>
                </div>
            </Link>

            <Link to = "/" className='Header__link'>
                <div className= "header__option">
                    <span className='header__optionLine1'>Returns</span>
                    <span className='header__optionLine2'>& Orders</span>
                </div>
            </Link>

            <Link to = "/" className='Header__link'>
                <div className= "header__option">
                    <span className='header__optionLine1'>Your</span>
                    <span className='header__optionLine2 '>Prime</span>
                </div>
            </Link> 

            <Link to = "/checkout" className='Header__link'>
            <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLine2 header__basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    
    </nav>
  )
}

export default Header