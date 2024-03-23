import React from "react";
import "./Hot_Deals.css";

const Hot_Deals = () => {
  return (
    <section className="hotDeals container" id="hotdeals">
      <h1>
        Hot<span>Deals</span>
      </h1>
      <div className="hotdeal_card">
        <p class="discount">
          30%
          <br />
          OFF
        </p>
        <img
          src="https://th.bing.com/th/id/R.ac8e6d9c0a4b9fc921b9e6efa3b5c154?rik=xz84UTYYVGEPng&pid=ImgRaw&r=0"
          alt=""
        />
        <div className="hotdeals_disc">
          <h2>Special Combo pack</h2>
          <h3>
            Burger Bizz <br /> Fries & Drinks
          </h3>
          <p>
            Get the best of both worlds with our Special Combo Pack! It's a
            convenient bundle of our top products at a great price. Perfect for
            anyone looking for value and variety in one easy package. Upgrade
            your experience with simplicity and savings!"
          </p>
          <button className="order_now2">Visit Now</button>
        </div>
      </div>
      <div className="Why_you_should_try">
        <h1>
          Why you should <span>Try ?</span>
        </h1>
        <h2>Because</h2>
        <div className="why_try">
          <p>Best Quality</p>
          <p>Natural Ingriedient</p>
          <p>Fast Delivery</p>
          <p>Huge quanitity</p>
        </div>
        <img
          src="https://restaurantanalyticshub.com/wp-content/themes/RAH/images/burger.png"
          alt=""
        />
      </div>
      <div className="Customer_reviews">
        <h1>
          Customer<span>Reviews</span>
        </h1>
        <div className="Customer_review">
          <div className="customer_card">
            <img
              src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="customer_disc">
              <p>
                Absolutely mouthwatering! The burger was cooked to perfection,
                with juicy, flavorful patties nestled between fresh, toasted
                buns. Each bite was a delightful explosion of taste, leaving me
                craving more. Top it off with crisp lettuce, ripe tomatoes, and
                just the right amount of sauce, and you've got yourself a burger
                worth savoring. 10/10 would indulge again!
              </p>
              <h2>Sinework Negasi</h2>
            </div>
          </div>
          <div className="customer_card">
            <img
              src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="customer_disc">
              <p>
                The 'Ultimate Burger' lives up to its name and then some! From
                the first bite to the last, I was in burger heaven. Succulent
                beef, perfectly melted cheese, and a symphony of toppings
                harmonize beautifully in every mouthful. It's not just a meal,
                it's an experience worth savoring. Bravo, Burger House, you've
                mastered the art of the burger!
              </p>
              <h2>Kalab</h2>
            </div>
          </div>
          <div className="customer_card">
            <img
              src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"
              alt=""
            />
            <div className="customer_disc">
              <p>
                Say hello to burger perfection at [Restaurant Name]! The
                'Signature Stack' is a towering masterpiece of flavor and
                satisfaction. With a blend of premium beef, artisanal cheese,
                and a medley of fresh veggies, each layer adds a new dimension
                to the taste sensation. It's a symphony of flavors that'll have
                your taste buds dancing with joy. This burger sets the bar high
                and delivers every time!
              </p>
              <h2>Liya Negasi</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hot_Deals;
