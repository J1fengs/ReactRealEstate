import React from "react";
import Email from "../assets/EmailIcon.png";
import Facebook from "../assets/FacebookIcon.png";
import Linkedin from "../assets/LinkedinIcon.png";
import Basket from "../assets/BasketIcon.png";
import Be from "../assets/BeIcon.png";
import Instagram from "../assets/InstagramIcon.png";
import Phone from "../assets/PhoneIcon.png";
import Logo from "../assets/Logo.png";
import DropdownIcon from "../assets/DropdownIcon.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="div-header">
        <img src={Email} className="email-icon" />
        <p className="p-email">
          <span className="span-email">Email us at </span>:
          jifanizza18@gmail.com
        </p>
        <img src={Facebook} />
        <img src={Basket} />
        <img src={Linkedin} />
        <img src={Instagram} />
        <img src={Be} />
        <img src={Phone} className="phone-icon" />
        <p className="p-phone-number">+62812 1304 1156</p>
      </div>
      <div className="div-header-lower">
        <div className="div-navbar">
          <img src={Logo} className="img-logo" />
          <h5>
            <span className="span-home">HOME</span>
          </h5>
          <h5>ABOUT US</h5>
          <h5>OUR AGENTS</h5>
          <h5>PROPERTIES</h5>
          <h5>GALLERY</h5>
          <h5>BLOG</h5>
          <h5>CONTACT US</h5>
          <h5>SEARCH</h5>
          <button className="button-listing">Add Listing</button>
        </div>
        <div className="div-main">
          <h2>Find Your Dream Home</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim
            possimus sunt beatae cumque obcaecati. Velit, illo eos eveniet
            fugiat voluptate facere delectus? Perferendis sit, unde quas dolore
            doloribus ad.
          </h3>
        </div>
        <div className="div-quick-menu">
          <div className="div-rent">
            <button className="button-rent">Rent</button>
            <button className="button-sale">Sale</button>
          </div>
          <div className="div-quick-search">
            <div>
              <h5>Locations</h5>
              <h6>
                Select your city <img src={DropdownIcon} />
              </h6>
            </div>
            <div>
              <h5>Property Type</h5>
              <h6>
                Select property type <img src={DropdownIcon} />
              </h6>
            </div>
            <div>
              <h5>Rent Range</h5>
              <h6>
                Select rent range <img src={DropdownIcon} />
              </h6>
            </div>
            <button className="button-quick-search">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
