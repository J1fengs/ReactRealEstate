import React from "react";
import SellHome from "../assets/SellHomeIcon.png";
import RentHome from "../assets/RentHomeIcon.png";
import BuyHome from "../assets/BuyHomeIcon.png";
import FreeMarketing from "../assets/FreeMarketingIcon.png";
import "../styles/Choose.css";

const Choose = () => {
  return (
    <div className="choose">
      <div className="choose-title">
        <h2>Choose Whats Best For You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          praesentium eos consequuntur voluptas repellat.
        </p>
      </div>
      <div className="choose-menu">
        <div className="menu-div">
          <img src={SellHome} className="choose-icon" />
          <h5 className="menu-title">Sell your home</h5>
          <p className="menu-desc">
            We do a free evaluation to be sure you want to start selling.
          </p>
          <p className="read-more">Read More</p>
        </div>
        <div className="menu-div">
          <img src={RentHome} className="choose-icon" />
          <h5 className="menu-title">Rent your home</h5>
          <p className="menu-desc">
            We do a free evaluation to be sure you want to start selling.
          </p>
          <p className="read-more">Read More</p>
        </div>
        <div className="menu-div">
          <img src={BuyHome} className="choose-icon" />
          <h5 className="menu-title">Buy a home</h5>
          <p className="menu-desc">
            We do a free evaluation to be sure you want to start selling.
          </p>
          <p className="read-more">Read More</p>
        </div>
        <div className="menu-div">
          <img src={FreeMarketing} className="choose-icon" />
          <h5 className="menu-title">Free marketing</h5>
          <p className="menu-desc">
            We do a free evaluation to be sure you want to start selling.
          </p>
          <p className="read-more">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
