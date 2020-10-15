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
                    id="342423423"
                    title="AmazonBasics 2 Slice Extra Wide Slot Toaster - Black"
                    price={21.45}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81smEEgnhfL._AC_SL1500_.jpg"
                />
                <Product
                    id="4343243"
                    title="Fire TV Cube, hands-free with Alexa built in, 4K Ultra HD, streaming media player"
                    price={99.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/415eDd-iH9L._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">c
                <Product
                    id="122323254"
                    title="Kindle Paperwhite – Now Waterproof with 2x the Storage"
                    price={106.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_SL1000_.jpg"
                />
                <Product
                    id="090909"
                    title="NutriBullet PRO 900 Series Nutrient Extractor, Blender & Mixer (9 Piece Set)"
                    price={74.89}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/718-A9CY8BL._AC_SL1500_.jpg"
                />            
                <Product
                    id="4892384"
                    title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Rubber Side Grips - Classic Black"
                    price={24.99}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RZiWPcj8L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                    id="6573453"
                    title="AOC CU34G2X 34 inch Curved Frameless Gaming Monitor, Ultrawide QHD 3440x1440, VA Panel, 1ms 144Hz FreeSync, 3-yr Zero Dead Pixels"
                    price={329.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-ke7Qp%2BxL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}
