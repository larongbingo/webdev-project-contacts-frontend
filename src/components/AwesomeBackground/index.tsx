import React, { Component } from "react";
import p5 from "p5";

import { circles } from "./circles";
import "./styles.css";

export class AwesomeBackground extends Component {
  public componentDidMount() {
    const awesomeBackgroundDiv = document.getElementById("awesomeBackground-div")
    const canvas = new p5(circles(awesomeBackgroundDiv!.clientWidth, awesomeBackgroundDiv!.clientHeight), awesomeBackgroundDiv!);
  }

  public render() {
    return (
      <div id="awesomeBackground-div" ref="awesomeBackgroundDiv">
      </div>
    );
  }
}
