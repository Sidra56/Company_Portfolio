import React from "react";
import "./team.scss";
import Tilt from "react-tilt";

export const TeamBlock = (props) => {
  return (
    <div className="image pa3 br2 shadow-2">
      <Tilt className="Tiltt" options={{ max: 80 }}>
        <div className="Tilt-inner ">
          <div className="">
            <img src={props.image} alt="pic" width="160" height="160" />
            <h6 className="b f3 pa0">{props.name}</h6>
            <p className="b white f5 ">{props.designatin}</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
