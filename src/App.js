import React, { Component } from "react";
import "./App.css";
import About from "./components/About/aboutus";
import { Team } from "./components/Team/Team";
import Portfolio from "./components/Portfolio/portfolio";
import Service from "./components/service/service";
import Contact from "./components/Contact/contact.component";
// import "bootstrap/dist/css/bootstrap.min.css";
import Foooter from "./components/Footer/footer.component.jsx";
import Header from "./components/Header/Header.js";
import Home from "./components/Header/home";
import Particles from "react-particles-js";
// import { BrowserRouter as Route, Switch, Router } from "react-router-dom";

const particleOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 700,
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particleOption} className="particles" />
        <Header />
        <Home />
        <About />
        <Team />
        <Service />
        <Contact />
        <Foooter />
      </div>
    );
  }
}

export default App;
