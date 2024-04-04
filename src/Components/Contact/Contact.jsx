import React from "react";
import './Contact.css'
import { FaPhoneAlt,FaFacebook,FaTiktok,FaInstagram,FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const url_image = "https://st2.depositphotos.com/1020618/5816/i/450/depositphotos_58160573-stock-photo-delicious-hamburger.jpg"

const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <h1>
        Contact<span>Us</span>
      </h1>
      <div className="contact_form">
        <div className="ContactUs">
          <div className="inputs_for_email">
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              required
            />
            <input
              type="text"
              placeholder="Subject "
              name="text"
              required
            />
            <textarea name="" id="" placeholder="Enter Your Message"></textarea>
          </div>
          <button className="send_message">Send Message</button>
        </div>
        <div className="ContactImage">
          <h1>Contact us</h1>
        <div className="address">
            <div><FaPhoneAlt className="contac"/><p>+251966855900</p></div>
            <div><MdMailOutline className="contac"/><a href="mailto:Sineworknegasi38@gmail.com">Sineworknegasi38@gmail.com</a></div>
            <div><FaLocationDot className="contac"/><p>Mekelle,Tigray,Ethiopia</p></div>
          </div>
          <div className="Social_medias">
            <FaFacebook className="social-icon"/>
            <FaTiktok className="social-icon"/>
            <FaInstagram className="social-icon"/>
            <FaGithub className="social-icon"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
