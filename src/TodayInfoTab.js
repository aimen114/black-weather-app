import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function TodayInfoTab(props) {
  const colormap = {
    "clear-sky-day": "today-info-day",
    "clear-sky-night": "today-info-night",
    "few-clouds-day": "today-info-cloud-day",
    "few-clouds-night": "today-info-cloud-night",
    "scattered-clouds-day": "today-info-cloud-day",
    "scattered-clouds-night": "today-info-cloud-night",
    "broken-clouds-day": "today-info-cloud-day",
    "broken-clouds-night": "today-info-cloud-night",
    "shower-rain-day": "today-info-rain-day",
    "shower-rain-night": "today-info-rain-night",
    "rain-day": "today-info-rain-day",
    "rain-night": "today-info-rain-night",
    "thunderstorm-day": "today-info-rain-day",
    "thunderstorm-night": "today-info-rain-night",
    "snow-day": "today-info-snow-day",
    "snow-night": "today-info-snow-night",
    "mist-day": "today-info-wind-day",
    "mist-night": "today-info-wind-night",
  };
  return (
    <div className="TodayInfoTab">
      <div className={`row today-info ${colormap[props.info.icon]}`}>
        <div className="col  weather-desc">{props.info.description}</div>

        <div className="col text-center ">
          <FontAwesomeIcon icon={icon({ name: "droplet" })} />{" "}
          {Math.round(props.info.humidity)}%
        </div>

        <div className="col text-end ">
          <FontAwesomeIcon icon={icon({ name: "wind" })} />{" "}
          {Math.round(props.info.wind)}Km
        </div>
      </div>
    </div>
  );
}
