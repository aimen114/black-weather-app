import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  const colormap = {
    "clear-sky-day": "forecast-day",
    "clear-sky-night": "forecast-night",
    "few-clouds-day": "forecast-cloud-day",
    "few-clouds-night": "forecast-cloud-night",
    "scattered-clouds-day": "forecast-cloud-day",
    "scattered-clouds-night": "forecast-cloud-night",
    "broken-clouds-day": "forecast-cloud-day",
    "broken-clouds-night": "forecast-cloud-night",
    "shower-rain-day": "forecast-rain-day",
    "shower-rain-night": "forecast-rain-night",
    "rain-day": "forecast-rain-day",
    "rain-night": "forecast-rain-night",
    "thunderstorm-day": "forecast-rain-day",
    "thunderstorm-night": "forecast-rain-night",
    "snow-day": "forecast-snow-day",
    "snow-night": "forecast-snow-night",
    "mist-day": "forecast-wind-day",
    "mist-night": "forecast-wind-night",
  };

  if (loaded) {
    return (
      <div className="WeatherForecast mt-4">
        <div>
          <h1 className="mb-2">Forecast</h1>
        </div>
        <div className={`forecast-rows ${colormap[props.icon]}`}>
          <ForecastDay forecast={forecast[1]} />
          <hr />
          <ForecastDay forecast={forecast[2]} />
          <hr />
          <ForecastDay forecast={forecast[3]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "95aba4bfo096ef39t52469746eae7704";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
