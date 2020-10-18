import React from 'react'
import { useStateValue } from '../StateProvider';
import '../styles/basketproduct.css';


export const BasketProduct = ({id , image , price , rating , title }) => {

    const [state , dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }


    return (
        <div className="basketProduct">
            <img alt="basket-product" src={image} className="basketProduct__image"/>

            <div className="basketProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_) => (<span role="img" aria-label="star-emoji">⭐</span>))}
                </div>  
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}
