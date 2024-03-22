import React from 'react'
import './Header.css'
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <section className='Home_section container'>
        <div className='left_home'>
            <h2>Try Our New</h2>
            <h1><span>Cheezy</span> Bluster</h1>
            <p>Burger House: Serving up delicious burgers made with quality ingredients. Come enjoy your favorite classics or try something new from our menu. Satisfaction guaranteed with every bite!"</p>
            <button className='order_now2'>Order Now</button>
            <div className='social-media'>
                <FaFacebook className='social-icon'/>
                <FaTiktok className='social-icon'/>
                <FaInstagram className='social-icon'/>
            </div>
        </div>
        <img className='Home_img' src="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png" alt="Home Burger" /> 
    </section>
  )
}

export default Header
