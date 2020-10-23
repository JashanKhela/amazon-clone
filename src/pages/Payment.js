import React from 'react'
import { Link } from 'react-router-dom';
import { BasketProduct } from '../components/BasketProduct';
import { useStateValue } from '../StateProvider';
import '../styles/payment.css'

export const Payment = () => {

  const [{ basket, user }] = useStateValue();
    
    return (
        <div className="payment"> 
           <div className="payment__container">
               <h1>Checkout (<Link to='checkout'>{basket?.length} items</Link>)</h1>
               {/* payment section -- delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angelas,CA</p>
                    </div>
                </div>

               {/* payment section -- Review Items  */}
                <div className="payment__section">
                <div className="payment__title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                <div className="payment__items">
                    {/* Basket Products */}
                    {basket.map(item => (
                        <BasketProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}/>
                    ))}
                </div>
                </div>


               {/* payment section -- Payment methods */}
               <div className="payment__section">
                    <div className="payment__title">
                            <h3>Payment Methods</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe payment stuff */}
                    </div>
                </div>
           </div>
        </div>
    )
}
