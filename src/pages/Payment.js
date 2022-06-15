import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link , useHistory } from "react-router-dom";
import { BasketProduct } from "../components/BasketProduct";
import { useStateValue } from "../StateProvider";
import "../styles/payment.css";

export const Payment = () => {

const history = useHistory();


    const calculatePrice = () => {
        let price = 0
        for (let item of basket){
          price = price + item.price
        }
        return price
      }
      
  const [{ basket, user }] = useStateValue();
  const [disabled, setDisabaled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

      useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `http://localhost:5001/clone-61bbc/us-central1/api/payments/create?total=${calculatePrice() * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
     // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [basket])

      console.log("CLINET SECRET ISSS" , clientSecret)

  const stripe = useStripe();
  const elements = useElements();

  const handleEvent = async (e) => {
      e.preventDefault();
      setProcessing(true);

/* eslint-disable no-unused-vars */

       const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method: {
               card: elements.getElement(CardElement)
           }
       }).then(({paymentIntent}) =>{
           setSucceeded(true);
           setError(null);
           setProcessing(false);

           history.replace('/orders')
       })
    ///stripe stuff
  };
/* eslint-disable no-unused-vars */

  const handleChange = (e) => {
    setDisabaled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="checkout">{basket?.length} items</Link>)
        </h1>
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
            {basket.map((item) => (
              <BasketProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
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
            <form onSubmit={(e) => handleEvent()}>
              <CardElement onChange={(e) => handleChange()} />

              <div class="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total : {value}
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={calculatePrice()} // Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing : </p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
