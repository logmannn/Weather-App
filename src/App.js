import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = [];
    const weather = this.props.weather;
    this.props.weather.forEach(weather => {
      cards.push(<WeatherCard weather={weather} key={weather.dayOfTheWeek} />);
    });

    return <div className="App">{cards}</div>;
  }
}

export default App;
