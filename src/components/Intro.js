import React from "react";
import "./Style.css";
export default function Intro() {
  return (
    <div className="text-center intro-bg">
      <h1 className="m-3">Get weather in your location</h1>
      <p >
        Press the button and allow location access to get weather in current
        location.
      </p>
    </div>
  );
}
