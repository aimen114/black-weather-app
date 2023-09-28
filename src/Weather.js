import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  const [isSearchAreaOpen, setSearchAreaOpen] = useState(false);

  function toggleSearchArea() {
    setSearchAreaOpen(!isSearchAreaOpen);
  }
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <div className="city">
            <h1>
              Vancouver{" "}
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
                  <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />
                </button>
              </div>
            )}
          </div>
          <div className="today-date">July 16, Thursday</div>
        </div>
        <div className="col-4 text-end temp-col">
          <div className="today-temp">
            <div className="current-temp">25</div>
            <div className="c-sign">℃</div>
          </div>
          <div className="today-feeling">Feels like 32°</div>
        </div>
      </div>
      <div className="second-section">
        <div className="today-circle">
          <div className="today-circle-content">
            🌨
            <br />
            Rain
          </div>
        </div>
        <div className="row today-info">
          <div className="col weather-desc">Clouds and rain</div>

          <div className="col">
            <FontAwesomeIcon icon={icon({ name: "droplet" })} />
            58%
          </div>

          <div className="col">
            <FontAwesomeIcon icon={icon({ name: "wind" })} /> 9 Km
          </div>
        </div>
      </div>
    </div>
  );
}
