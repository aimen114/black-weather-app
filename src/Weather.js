import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  const [isSearchAreaOpen, setSearchAreaOpen] = useState(false);

  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState("islamabad");

  function toggleSearchArea() {
    setSearchAreaOpen(!isSearchAreaOpen);
  }
  function handleSearch(response) {
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
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "95aba4bfo096ef39t52469746eae7704";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
  }
  function handleSubmit(event) {
    event.preventDefault();
    toggleSearchArea();
    //search city
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
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
                <form className="input-group mb-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control search-bar"
                    placeholder="Search"
                    aria-describedby="button-addon2"
                    onChange={handleCityChange}
                  />
                  <button
                    className="btn btn-outline-secondary search-bar-icon"
                    type="submit"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon
                      icon={icon({ name: "magnifying-glass" })}
                    />
                  </button>
                </form>
              )}
            </div>
            <div className="today-date">
              <FormattedDate date={weatherData.date} />
            </div>
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
            </div>
          </div>
          <div className="row today-info">
            <div className="col weather-desc">{weatherData.description}</div>

            <div className="col text-end  humidity">
              <FontAwesomeIcon icon={icon({ name: "droplet" })} />{" "}
              {Math.round(weatherData.humidity)}%
            </div>

            <div className="col text-end  wind">
              <FontAwesomeIcon icon={icon({ name: "wind" })} />{" "}
              {Math.round(weatherData.wind)} Km
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Laoding ...";
  }
}
