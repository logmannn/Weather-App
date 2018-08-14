import React, { Component } from "react";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyHours: this.props.weather.hourly,
      dayOfTheWeek: this.props.weather.dayOfTheWeek
    };
  }

  handler() {
    this.props.handler([this.state.dayOfTheWeek, this.state.dailyHours]);
  }

  render() {
    const dayOfTheWeek = this.props.weather.dayOfTheWeek;
    const lowWeather = this.props.weather.highLow[1];
    const highWeather = this.props.weather.highLow[0];
    const weather = this.props.weather.weather;
    const hourly = this.props.weather.hourly;

    let selected = "";

    if (dayOfTheWeek == this.props.selected) {
      selected = "selected";
    }

    return (
      <div
        className={"weatherCard " + selected}
        onClick={this.handler.bind(this)}
      >
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
