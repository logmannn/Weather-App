import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyHours: ""
    };
    this.handler = this.handler.bind(this);
  }

  handler(dailyHours) {
    // event.preventDefault();
    // console.log(dailyHours);
    // console.log(this.props);
    this.setState({
      dailyHours: dailyHours
    });
    // console.log(this.state);
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

    return <div className="App">{cards}</div>;
  }
}

export default App;
