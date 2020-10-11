import React from "react";
import "./services.scss";

export const Block = (props) => {
  return (
    <div className="box pa3 ">
      <div className="icon f1 white pa2">
        <i className={props.image} />
      </div>
      <h5 className='f3 '>{props.designation} </h5>
      <span > {props.subTitle} </span>
    </div>
  );
};
