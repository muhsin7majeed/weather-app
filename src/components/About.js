import React from "react";
import "./Style.css";
export default function About() {
  return (
    <div>
      <div className="jumbotron jumbo-bg bg-dark">
        <p className="text-muted blockquote text-center">
          We do not store your personal data such as your location, this app
          only has local storage, it means the data will be gone once you leave
          the app.
        </p>
        <br />
        <h3>About This App</h3>
        <p className="text-justify">
          Hi I'm <a href="https://www.github.com/muhsin7majeed">Muhsin</a>. I
          made this Weather-App to learn react-js. This is just a simple web-app
          that fetches weather details from{" "}
          <a href="https://darksky.net/dev">Dark Sky Api</a>. I tried to add a
          search field, but couldn't find a FREE api to get location details (
          google maps api throws 'request limit reached ' error :p). So, now
          this app only shows weather for your current location. (That too is
          not accurate :( ) Also it has a problem with getting geolocation of
          mobile devices.
        </p>
      </div>
    </div>
  );
}
