import React, { Component } from "react";
import HourlyCard from "./HourlyCard";
import "./DailyWeather.css";

class DailyWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hourlyCards = [];
    let hourlyInfo = this.props.hourlyWeather;
    let hourlyTemperature = hourlyInfo[1][1];
    let hourlyWeather = hourlyInfo[1][0];
    let hour = hourlyInfo[1][2];
    let selected = "";

    const result = [];
    if (hourlyTemperature != null) {
      selected = hourlyInfo[0];

      let map = Object.keys(hourlyTemperature).map(function(key) {
        hourlyCards.push(
          <HourlyCard
            key={hour[key]}
            hour={hour[key]}
            hourlyTemperature={hourlyTemperature[key]}
            hourlyWeather={hourlyWeather[key]}
          />
        );
      });
    }

    return (
      <div className="hourlyCard">
        {/* <div class="day">{selected}</div> */}
        {hourlyCards}
      </div>
    );
  }
}

export default DailyWeather;
