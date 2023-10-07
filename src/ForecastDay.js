import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay row">
      <div className="col">{day()}</div>
      <div className="col text-center">
        <span className="max-temp">
          {Math.round(props.forecast.temperature.maximum)}°
        </span>{" "}
        <span className="min-temp">
          {" "}
          {Math.round(props.forecast.temperature.minimum)}°
        </span>
      </div>
      <div className="col text-end">
        <WeatherIcon size={30} code={props.forecast.condition.icon} />
      </div>
    </div>
  );
}
