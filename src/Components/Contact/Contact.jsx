import React from "react";
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="Contact container">
      <h1>
        Contact<span>Us</span>
      </h1>
      <div className="Contact_container">
        <div class="contact_form">
          <h2>Get in Touch!</h2>
          <input type="text" placeholder="Reach Out and Connect!" />
          <button className="order_now5">Subscribe</button>
        </div>
        <div class="contact_us">
            <p><FaPhoneAlt/> +251966855900</p>
            <p><MdMailOutline/><a href="mailto:Sineworknegasi38@gmail.com">Sineworknegasi38@gmail.com</a></p>
            <p><FaLocationDot/>Mekelle,Tigray,Ethiopia</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
