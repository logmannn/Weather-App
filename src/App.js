import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import DailyWeather from "./DailyWeather";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyHours: [{}, {}]
    };
    this.handler = this.handler.bind(this);
  }

  handler(dailyHours) {
    this.setState({
      dailyHours: dailyHours
    });
  }

  render() {
    const cards = [];
    const weather = this.props.weather;
    let selected = "";

    this.props.weather.forEach(weather => {
      if (this.state.dailyHours[0] == weather.dayOfTheWeek) {
        selected = weather.dayOfTheWeek;
      }
      cards.push(
        <WeatherCard
          weather={weather}
          key={weather.dayOfTheWeek}
          handler={this.handler.bind(this)}
          selected={selected}
        />
      );
    });

    return (
      <div className="App">
        <div className="CardWrapper">{cards}</div>
        <div className="HourlyWeather">
          <DailyWeather hourlyWeather={this.state.dailyHours} />
        </div>
      </div>
    );
  }
}

export default App;
