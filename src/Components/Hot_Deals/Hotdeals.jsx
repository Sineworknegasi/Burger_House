import React from "react";
import "./Hot_Deals.css";

const Hot_Deals = () => {
  return (
    <section className="hotDeals container">
      <h1>Hot<span>Deals</span></h1>
      <div className="hotdeal_card">
        <p class="discount">30%<br/>OFF</p>
        <img
          src="https://th.bing.com/th/id/R.ac8e6d9c0a4b9fc921b9e6efa3b5c154?rik=xz84UTYYVGEPng&pid=ImgRaw&r=0"
          alt=""
        />
        <div className="hotdeals_disc">
          <h2>Special Combo pack</h2>
          <h3>Burger Bizz <br/> Fries & Drinks</h3>
          <p>Get the best of both worlds with our Special Combo Pack! It's a convenient bundle of our top products at a great price. Perfect for anyone looking for value and variety in one easy package. Upgrade your experience with simplicity and savings!"</p>
          <button className="order_now2">Visit Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hot_Deals;
