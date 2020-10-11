import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className='home-cover'
      style={{
        backgroundImage:
          'URL("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZDtnfAyjZ2CzDte_VQCY-B7wkwE9ru2_LsQ&usqp=CAU")',
      }}
    >
      <div
        className="home-item"
        style={{
          textTransform: "uppercase",
        }}
      >
        <h1 className=" home-title f3 b white">
          {
            " “ Any time is a good time to start a company.” -Ron Conway "
          }
        </h1>

        <button className="home-button f5 ph3 pv2 dib white bg-purple grow br3 b shadow-2 w-20 link ">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Home;
