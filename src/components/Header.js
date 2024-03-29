import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
export const Header = () => {

    const [{basket , user }] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
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
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne"> Hello {user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo">  { user ? 'Sign Out' : 'Sign In'}</span>
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
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
