import React from "react";
import './logo.scss'
import Tilt from "react-tilt";
import Logo0 from "./logo.png";

const Logo = () => {
  return (
    <div>
    <Tilt
      className="Tilt br2 shawdow-2"
      options={{ max: 80 }}
      style={{ height: 80, width: 100 }}
    >
      <div className="Tilt-inner pa3">
        <img src={Logo0} alt="logo" />
      </div>
    </Tilt>
  </div>
  );
};
export default Logo;
