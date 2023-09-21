import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <div className="city">
            <h1>
              Vancouver <i>🔽</i> <i>📍</i>
            </h1>
            <br />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                🔍
              </button>
            </div>
          </div>
          <div className="today-date">July 16, Thursday</div>
        </div>
        <div className="col text-end">
          <div className="today-temp">
            <div className="current-temp">25</div>
            <div className="c-sign">℃</div>
          </div>
          <div className="today-feeling">Feels like 32°</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="today-circle">
              🌨
              <br />
              Rain
            </div>
            <div className="today-info">
              Clouds
              <br />
              💧 58%
              <br />
              💨 9 Km
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
