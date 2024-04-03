import React from 'react'
import './menu.css'
import {Burgers} from '../files/Burgers'

const Menu =  Burgers.map((menu) => {
  return (
    <div className="Explore_Menu_card">
          <h2>{menu.name}</h2>
          <div className="Explore_menu_img">
            <img
              src="https://th.bing.com/th/id/R.abb18eea3fe18e97c4d5e3e7aae91e23?rik=fER1ykCMrCdPqQ&pid=ImgRaw&r=0"
              alt="Explore_img"
            />
            <p className="explore_disc">
              {menu.description}
            </p>
          </div>
          <p className="price">$12.66</p>
          <button className="orderNow3">Order Now</button>
        </div>  
  )
})

const Menus = () => {
  return (
    <section className="Explore_Menu container" id="menu">
      <h1>
        Explore<span>Menu</span>
      </h1>
      <div className="Explore_Menu_container">
        {Menu} 
      </div>
      <a href="#Explore" className="Explore_menu_btn">Explore Menu </a>
    </section>
  )
}

export default Menus