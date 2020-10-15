import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export const Header = () => {

    return (
        <nav className="header">
            <Link to='/'>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__input" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* First Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Sign In</span>
                        <span className="header__optionLineTwo">Hello Sarbjeet</span>
                    </div>
                </Link>
                {/* Second Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* Third Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* Fourth Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
