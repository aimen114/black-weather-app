import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherCircle.css";

export default function WeatherCircle(props) {
  return (
    <div className="weatherCircle">
      <div className="today-circle">
        <div className="today-circle-content">
          <WeatherIcon code={props} />
        </div>
      </div>
    </div>
  );
}
