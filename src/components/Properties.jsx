import React from "react";
import AreaContent from "./AreaContent";
import "../styles/Properties.css";
import propertiesArea from "../data/propertiesArea";

const Properties = () => {
  const cards = propertiesArea.map((item) => {
    return <AreaContent item={item} />;
  });
  return (
    <div className="area">
      <div className="area-title">
        <h2>Properties by Area</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ullam, non dolor veniam cupiditate obcaecati sunt.
        </h4>
      </div>
      <div className="area-content">{cards}</div>
    </div>
  );
};

export default Properties;
