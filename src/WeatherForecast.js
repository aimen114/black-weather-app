import React from "react";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast mt-4">
      <div>
        <h1 className="mb-2">Forecast</h1>
      </div>
      <div className="forecast-rows">
        <div className="row">
          <div className="col">Thu</div>
          <div className="col text-center">
            <span className="max-temp">12° /</span>
            <span className="min-temp"> 10°</span>
          </div>
          <div className="col text-end">
            <WeatherIcon size={30} code={"clear-sky-day"} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">Thu</div>
          <div className="col text-center">
            <span className="max-temp">12° /</span>
            <span className="min-temp"> 10°</span>
          </div>
          <div className="col text-end">
            <WeatherIcon size={30} code={"clear-sky-day"} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">Thu</div>
          <div className="col text-center">
            <span className="max-temp">12° /</span>
            <span className="min-temp"> 10°</span>
          </div>
          <div className="col text-end">
            <WeatherIcon size={30} code={"clear-sky-day"} />
          </div>
        </div>
      </div>
    </div>
  );
}
