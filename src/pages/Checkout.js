import React from 'react'
import '../styles/checkout.css'
import Subtotal  from '../components/Subtotal'
export const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h1 className="checkout__title">Your Shopping Basket</h1>
                </div>
            </div>

            <div className="checkout__right"></div>
            <Subtotal />
        </div>
    )
}
