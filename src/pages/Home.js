import React from 'react'
import '../styles/home.css'
import { Product } from '../components/Product'
export const Home = () => {
    return (
        <div className='home'>
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MDExNDZkNDkt/MDExNDZkNDkt-YjIwZTkwMTct-w3000._CB418853440_.jpg"
                alt=""
                className="home__image" />
            <div className="home__row">
                <Product
                    id="122323254"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="122323254"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="122323254"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="122323254"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                                <Product
                    id="122323254"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />                <Product
                id="122323254"
                title="The Lean Startup: How Constant Innovation Creates"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />
            </div>
        </div>
    )
}
