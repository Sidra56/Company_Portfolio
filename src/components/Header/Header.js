import React from "react";
import "./header.scss";
import Logo from './logo'


const Header = (props) => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg  fixed-top navbar-light ">
        <a className="navbar-brand" href="/">
        <Logo/>
        </a>
        <button
          className="navbar-toggler bg-blue"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/" onClick={props.Home}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutUs" onClick={props.About}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services" onClick={props.Service}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio" onClick={props.Portfolio}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/testinomials">
                Testinomials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactUs" onClick={props.Contact}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;