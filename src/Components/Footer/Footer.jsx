import React from 'react'
import './Footer.css'
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='Footer'>
        <h1>Burger House</h1>
        <ul id="footerlink">
            <li><a href="#page">Menu</a></li>
            <li><a href="#page"> HotDeals</a></li>
            <li><a href='#page'>Contact Us</a></li>
        </ul>
        <div className='Footer_media'>
                <FaFacebook className='social-icon'/>
                <FaTiktok className='social-icon'/>
                <FaInstagram className='social-icon'/>
        </div>
        <p>© {new Date().getFullYear()} <span>Burger House</span>. All Rights Reserved. || this landing page made By Sinework</p>
    </section>
  )
}

export default Footer
