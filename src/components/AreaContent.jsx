import React from "react";
import Location from "../assets/LocationIcon.png";
import "../styles/Properties.css";

const AreaContent = (props) => {
  return (
    <div
      className="area-content-div"
      style={{
        backgroundImage: `url(${props.item.img})`,
      }}
    >
      <h4>{props.item.city}</h4>
      <p>{props.item.listing}</p>
      <button className="view-details">View Details</button>
      <img src={Location} className="location-icon" />
    </div>
  );
};

export default AreaContent;
