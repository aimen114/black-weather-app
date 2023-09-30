import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  const [isSearchAreaOpen, setSearchAreaOpen] = useState(false);

  const [weatherData, setWeatherData] = useState({ ready: false });

  function toggleSearchArea() {
    setSearchAreaOpen(!isSearchAreaOpen);
  }
  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <div className="city">
              <h1>
                {weatherData.city}{" "}
                <i onClick={toggleSearchArea}>
                  {isSearchAreaOpen ? (
                    <FontAwesomeIcon icon={icon({ name: "chevron-up" })} />
                  ) : (
                    <FontAwesomeIcon icon={icon({ name: "chevron-down" })} />
                  )}
                </i>{" "}
                <FontAwesomeIcon icon={icon({ name: "location-dot" })} />
              </h1>
              <br />
              {isSearchAreaOpen && (
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control search-bar"
                    placeholder="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary search-bar-icon"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon
                      icon={icon({ name: "magnifying-glass" })}
                    />
                  </button>
                </div>
              )}
            </div>
            <div className="today-date">July 16, Thursday</div>
          </div>
          <div className="col-4 text-end temp-col">
            <div className="today-temp">
              <div className="current-temp">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="c-sign">℃</div>
            </div>
            <div className="today-feeling">
              Feels like {Math.round(weatherData.feelsLike)}°
            </div>
          </div>
        </div>
        <div className="second-section">
          <div className="today-circle">
            <div className="today-circle-content">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <br />
              Rain
            </div>
          </div>
          <div className="row today-info">
            <div className="col weather-desc">{weatherData.description}</div>

            <div className="col text-end me-2 humidity">
              <FontAwesomeIcon icon={icon({ name: "droplet" })} />{" "}
              {Math.round(weatherData.humidity)}%
            </div>

            <div className="col text-end me-2 wind">
              <FontAwesomeIcon icon={icon({ name: "wind" })} />{" "}
              {Math.round(weatherData.wind)} Km
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "95aba4bfo096ef39t52469746eae7704";
    let city = "vancouver";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "Laoding ...";
  }
}
