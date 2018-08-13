import React, { Component } from "react";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dayOfTheWeek = this.props.weather.dayOfTheWeek;
    const lowWeather = this.props.weather.highLow[1];
    const highWeather = this.props.weather.highLow[0];
    const weather = this.props.weather.weather;

    return (
      <div className="weatherCard">
        <div className="dayOfTheWeek">{dayOfTheWeek}</div>
        <div className="imageWrapper">
          <img src={require("./images/" + weather + ".png")} />
        </div>
        <div className="temperature">
          {highWeather}
          &#176; -{" "}
          <span className="lowWeather">
            {lowWeather}
            &#176;
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
