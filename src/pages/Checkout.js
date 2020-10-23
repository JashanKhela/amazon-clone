import React from "react";
import "../styles/checkout.css";
import Subtotal from "../components/Subtotal";
import { BasketProduct } from "../components/BasketProduct";
import { useStateValue } from "../StateProvider";

export const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your ({user?.email}) Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <BasketProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            );
          })}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
