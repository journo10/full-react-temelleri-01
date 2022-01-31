import React from "react";
import northernPic from "./image/NorthernHemisphere.jpg";
import southernPic from "./image/SouthernHemisphere.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "Kuzey yarım küre",
    picture: northernPic,
  },
  Southern: {
    text: "Güney yarım küre",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  //const picture = latitude >0 ? "northernPic" : "southernPic" //bunu kaldırıp biryere toplandın..hemisphereConfig
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemispherePicture" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
