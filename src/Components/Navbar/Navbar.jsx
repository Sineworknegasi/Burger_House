import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdMessage, MdHomeRepairService } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {
    /*======TOggle Menu ======== */
    const [Toggle, ShowMenu] = useState(false);



  return (
    <header className="header">
      <nav className="nav container">
        <a href="#Home" className="nav__logo">
          Burger House
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item ">
              <a href="/" className="nav__link active-link">
                <FaHome class=" nav__icon"></FaHome>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#menu" className="nav__link">
                <MdMenuBook class="nav__icon"></MdMenuBook>
                Menu
              </a>
            </li>
            <li className="nav__item">
              <a href="#hotdeals" className="nav__link">
                <IoFastFood class=" nav__icon"></IoFastFood>
                HotDeals
              </a>
            </li>
            <li className="nav__item">
              <a href="#service" className="nav__link">
              <MdHomeRepairService class="uil uil-briefcase-alt nav__icon"></MdHomeRepairService>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <MdMessage class="uil uil-message nav__icon"></MdMessage>
                Contact
              </a>
            </li>
          </ul>

          <IoMdClose class="nav__icon nav__close" onClick={() => ShowMenu(!Toggle)}></IoMdClose>
        </div>

        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
            <RiMenu3Fill className="nav__icon"></RiMenu3Fill>
        </div>
      </nav>
    </header>
  );
};

export default Navbar
