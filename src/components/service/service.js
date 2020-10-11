import React from "react";
import serviceArray from "./ServiceArray";
import "./services.scss";
import { Block } from "./serviceblock";


const Service = () => {
  return (
    <div className="services pa3">
      <div className="section-title pa2">
        <h1 className='f1 white'>Our Services</h1>
      </div>
      <div className="service-content br2 dark-gray shadow-1 mv4 pa1">
        {serviceArray.map(work => (
          <Block  key={work.key} image={work.image} designation={work.designation} subTitle={work.subTitle} />
        ))}
      </div>
    </div>
  );
};
export default Service;
