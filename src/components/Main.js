import React, { Component } from "react";
import "./Style.css";
import About from "./About";
import Intro from "./Intro";
import Weather from "./Weather";
require("dotenv").config();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Intro />
        <div className="text-centerr">
          <Weather />
          <About />
        </div>
      </div>
    );
  }
}
