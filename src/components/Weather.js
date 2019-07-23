import React, { Component } from "react";
import "./Style.css";
require("dotenv").config();

const Dat = new Date();

var time = new Date().toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true
});

const darkSkyKey = process.env.REACT_APP_DARK_SKY_KEY;
const openCageKey = process.env.REACT_APP_OPEN_CAGE_DATA_KEY;

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: " - - - ",
      time: {
        day: Dat.getDate(),
        month: Dat.getMonth(),
        year: Dat.getFullYear(),
        curTime: time
      },
      weather: {
        tempC: "-",
        tempF: "-",
        summary: "-",
        icon: "-"
      },
      gif: "default.jpg"
    };
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.showLocation);
  };

  showLocation = getPos => {
    const lat = getPos.coords.latitude;
    const long = getPos.coords.longitude;

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const darkSkyApi = `${proxy}https://api.darksky.net/forecast/${darkSkyKey}/${lat},${long}/?units=si`;
    const openCageApi = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${openCageKey}`;

    fetch(darkSkyApi)
      .then(data => data.json())
      .then(res => {
        this.setState({
          weather: {
            tempC: res.currently.temperature,
            tempF: (res.currently.temperature * 9) / 5 + 32,
            summary: res.currently.summary,
            icon: res.currently.icon
          }
        });

        switch (res.currently.icon) {
          case "cloudy":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-cloud" />
              },
              gif: "clouds.gif"
            });
            break;
          case "clear-day":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-sun" />
              },
              gif: "clear-day.gif"
            });
            break;
          case "clear-night":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-moon" />
              },
              gif: "clear-night.gif"
            });
            break;
          case "rain":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-cloud-rain" />
              },
              gif: "rain.gif"
            });
            break;
          case "snow":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-snowflake" />
              },
              gif: "snow.gif"
            });
            break;
          case "sleet":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-snowflake" />
              },
              gif: "sleet.gif"
            });
            break;
          case "wind":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-wind" />
              },
              gif: "wind.gif"
            });
            break;
          case "fog":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-smog" />
              },
              gif: "fog.gif"
            });
            break;
          case "partly-cloudy-day":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-cloud-sun" />
              },
              gif: "partly-cloudy-day.gif"
            });
            break;
          case "partly-cloudy-night":
            this.setState({
              weather: {
                tempC: this.state.weather.tempC,
                tempF: this.state.weather.tempF,
                summary: this.state.weather.summary,
                icon: <i className="fa fa-cloud-moon" />
              },
              gif: "partly-cloudy-night.gif"
            });
            break;

          default:
            this.setState({
              weather: {
                icon: "-"
              },
              gif: "default.jpg"
            });
            break;
        }
      });

    fetch(openCageApi)
      .then(data => data.json())
      .then(res => {
        this.setState({
          place: res.results[0].formatted
        });
      });
  };
  componentDidMount() {}

  render() {
    const { day, month, year, curTime } = this.state.time;
    const { tempC, tempF, summary, icon } = this.state.weather;
    return (
      <div>
        <div>
          <div className="gif-container">
            <img
              className="background-gif"
              src={require(`./videos/${this.state.gif}`)}
              alt="loading..."
            />
          </div>

          <button className="mb-3 btn btn-primary" onClick={this.getLocation}>
            Get Weather
          </button>
          <div className="time-and-place">
            {this.state.place} <br />
            {day} - {month} - {year} <br /> {curTime}
          </div>
          <div>
            <div className="Weather-temp-flex ">
              <span className="weather-icon">{icon}</span>
              <span className="weather-temperature">
                {tempC}℃ <br /> {tempF}℉
              </span>
              <span className="weather-summary">{summary}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
