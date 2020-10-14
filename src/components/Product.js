import React from 'react'
import '../styles/product.css'

export const Product = ({ title, price, id, image, rating }) => {
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
            <button>Add To Basket</button>
        </div>
    )
}
