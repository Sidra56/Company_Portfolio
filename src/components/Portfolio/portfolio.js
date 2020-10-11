import React, { Component } from "react";
import "./portfolio.style.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-buttons">
          <div className="button-div">
            <button className="buttonn">Web</button>
          </div>
          <div className="button-div">
            <button className=" buttonActive buttonn">Desktop</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
