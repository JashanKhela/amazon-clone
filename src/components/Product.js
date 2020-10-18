import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/product.css'



export const Product = ({ title, price, id, image, rating }) => {

    const [{basket} , dispatch] = useStateValue();

    console.log("THIS IS THE BASKET " , basket)
    const addToBakset = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            {/* First Child */}
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {
                    Array(rating).fill().map((_) => (<span role="img" aria-label="star-emoji">⭐</span>))
                }
            </div>
            </div>
            {/* Second Child */}
            <img src={image} alt="" />
            {/* Third Child */}
            <button onClick={addToBakset}>Add To Basket</button>
        </div>
    )
}
