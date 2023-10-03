import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCircle(props) {
  const colormap = {
    "clear-sky-day": "today-circle-day",
    "clear-sky-night": "today-circle-night",
    "few-clouds-day": "today-circle-cloud-day",
    "few-clouds-night": "today-circle-cloud-night",
    "scattered-clouds-day": "today-circle-cloud-day",
    "scattered-clouds-night": "today-circle-cloud-night",
    "broken-clouds-day": "today-circle-cloud-day",
    "broken-clouds-night": "today-circle-cloud-night",
    "shower-rain-day": "today-circle-rain-day",
    "shower-rain-night": "today-circle-rain-night",
    "rain-day": "today-circle-rain-day",
    "rain-night": "today-circle-rain-night",
    "thunderstorm-day": "today-circle-rain-day",
    "thunderstorm-night": "today-circle-rain-night",
    "snow-day": "today-circle-snow-day",
    "snow-night": "today-circle-snow-night",
    "mist-day": "today-circle-wind-day",
    "mist-night": "today-circle-wind-night",
  };
  return (
    <div className="weatherCircle">
      <div className={`today-circle ${colormap[props.icon.icon]}`}>
        <div className="today-circle-content">
          <WeatherIcon code={props.icon.icon} />
        </div>
      </div>
    </div>
  );
}
