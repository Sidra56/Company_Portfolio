import React from "react";
import "./foooter.scss";

const Foooter = () => {
  return (
    <div className="footer">
      <div>
        <div className="footercontent">
          <div className="footercontent-aboutus ">
            <h5 className="title">About Us</h5>
            <p className="para b ">
              We provide complete business solutions, which enables businesses
              to leverage leading edge technology to gain sustainable
              competitive advantages in today’s marketplace.
            </p>
          </div>
          <div className="footercontent-quick">
            <h5 className="title">Quick Links</h5>
            <p className="para hover b f4">About Us</p>
            <p className="para hover b f4">Services</p>
            <p className="para hover b f4 ">Testimonials</p>
            <p className="para hover b f4">Contact Us</p>
          </div>
          <div className="footercontent-follow ">
            <h5 className="title">Follow Us</h5>
            <p className="fa fa-facebook para hover b f3 "></p>
            <p className="fa fa-twitter para hover b f3 "></p>
            <p className="fa fa-instagram para hover b f3 "></p>
            <p className="fa fa-linkedin para hover b f3 "></p>
          </div>
          <div className="footercontent-news ">
            <h5 className="title">Subscribe Newsletter</h5>
            <div className="footercontent-news-part">
              <input
                type="text"
                className=" white footercontent-news-textbox"
                placeholder="Enter Email"
              />
              <button className="button br2 shadow-1 pa2 b">Send</button>
            </div>
          </div>
        </div>
        <hr className="line" />
        <h5 className="copyright wheat">
          Copyright ©2020 All rights reserved by Company
        </h5>
      </div>
    </div>
  );
};
export default Foooter;
