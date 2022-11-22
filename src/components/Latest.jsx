import React from "react";
import LatestContent from "./LatestContent";
import data from "../data/latestProperties";
import "../styles/Latest.css";

const Latest = () => {
  const card = data.map((item) => {
    return <LatestContent item={item} />;
  });

  return (
    <div className="latest">
      <div className="latest-title">
        <h2>Latest Properties of Rent</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          fugit vel beatae?
        </p>
      </div>
      <div className="latest-menu">{card}</div>
    </div>
  );
};

export default Latest;
