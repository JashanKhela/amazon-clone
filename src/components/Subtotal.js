import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import '../styles/subtotal.css'

const Subtotal = () => {
  const [{basket}] = useStateValue();
  const history = useHistory();
  const calculatePrice = () => {
    let price = 0
    for (let item of basket){
      price = price + item.price
    }
    return price
  }

    return (
        <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket?.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={calculatePrice()} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
  
        
        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        
      </div>
    )
}
 export default Subtotal;