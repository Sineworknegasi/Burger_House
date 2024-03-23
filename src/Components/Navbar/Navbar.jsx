import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import './Navbar.css'
const Mobilemenu = document.getElementById('btn_menu');
const MobileClose = document.getElementById('btn_close');
const navlinks = document.getElementById('navlinks');
const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggles');

const menu = () => {
  Mobilemenu.style= 'display: none';
  MobileClose.style = 'display: block';
  navlinks.style.display = 'none';
  navbar.style.height = 'auto';
  console.log('menu clicked');
}
const close = () => {
  Mobilemenu.style= 'display:block';
  MobileClose.style = 'display: none';
  navlinks.style = 'display: flex';
  navbar.style.height = '100%';
  console.log('close');
}




const Navbar = () => {
  return (
    <section className='navbar container' id="navbar">
        <div className='navbar-logo'>
            <a href='/'>Burger House</a>
        </div>
            <ul id="navlinks">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#hotdeals"> HotDeals</a></li>
            <li><a href='#contact'>Contact Us</a></li>
            <li><a href='#page'>+251966855900</a></li>
            </ul>

        <div className='navbar-buttons'>
            <button className='order_now'>Order Now</button>
        </div>
        <div className='toggle_menu' id='toggles' >
          <RiMenu3Line className='menu' id="btn_menu" onClick={menu}></RiMenu3Line>
          <IoMdClose className='close' id="btn_close" onClick={close}></IoMdClose>
        </div>
    </section>
  )
}

export default Navbar
