import React, { Component } from "react";
import "./HourlyCard.css";

class HourlyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="hourlyCards">
        <div className="hour">{this.props.hour}</div>
        <div className="hourlyWeather">{this.props.hourlyWeather}</div>
        <div className="hourlyTemperature">{this.props.hourlyTemperature}</div>
      </div>
    );
  }
}

export default HourlyCard;
