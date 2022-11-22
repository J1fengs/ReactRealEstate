import React from "react";
import Logo from "../assets/LogoFooter.png";
import Facebook from "../assets/FacebookFooter.png";
import Basket from "../assets/BasketFooter.png";
import Linkedin from "../assets/LinkedinFooter.png";
import Instagram from "../assets/InstagramFooter.png";
import Be from "../assets/BeFooter.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <img src={Logo} className="footer-logo" />
        <h2 className="footer-contact-us">Contact Us</h2>
        <p className="footer-call">Call: +62812 1304 1156</p>
        <p>Email : jifanizza18@gmail.com</p>
        <div className="footer-icon">
          <img src={Facebook} />
          <img src={Basket} />
          <img src={Linkedin} />
          <img src={Instagram} />
          <img src={Be} />
        </div>
      </div>
      <div className="footer-div">
        <h2>Features</h2>
        <h5>Home</h5>
        <h5>Become a Host</h5>
        <h5>Pricing</h5>
        <h5>Blog</h5>
        <h5>Contact</h5>
      </div>
      <div className="footer-div">
        <h2>Company</h2>
        <h5>About Us</h5>
        <h5>Press</h5>
        <h5>Contact</h5>
        <h5>Careers</h5>
      </div>
      <div className="footer-div">
        <h2>Team and Policies</h2>
        <h5>Terms of Services </h5>
        <h5>Privacy Policy</h5>
        <h5>Security</h5>
      </div>
    </div>
  );
};

export default Footer;
