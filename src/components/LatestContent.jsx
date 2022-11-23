import React from "react";
import CarIcon from "../assets/CarIcon.png";
import BathubIcon from "../assets/BathtubIcon.png";
import ArrowsOutIcon from "../assets/ArrowsOutIcon.png";
import ShareIcon from "../assets/ShareIcon.png";
import HeartIcon from "../assets/HeartIcon.png";
import PlusIcon from "../assets/PlusIcon.png";
import "../styles/Latest.css";

const LatestContent = (props) => {
  return (
    <div className="latest-content-div">
      <img src={props.item.img} className="content-img" />
      <h4>{props.item.title}</h4>
      <p className="latest-price">${props.item.price}</p>
      <div className="details-div">
        <img src={CarIcon} />
        <p>{props.item.garage}</p>
        <img src={BathubIcon} />
        <p>{props.item.bathroom}</p>
        <img src={ArrowsOutIcon} />
        <p>{props.item.large} ft</p>
      </div>
      <div className="seller-div">
        <img src={props.item.sellerIcon} className="seller-profile-pic" />
        <p>{props.item.sellerName}</p>
        <img src={ShareIcon} className="seller-icon" />
        <img src={HeartIcon} className="seller-icon" />
        <img src={PlusIcon} className="seller-icon" />
      </div>
    </div>
  );
};

export default LatestContent;
