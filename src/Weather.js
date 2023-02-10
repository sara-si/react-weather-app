import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3" id="search-form">
        <div className="row search">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city..."
              className="form-control search-city"
              autocomplete="off"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="search-button"
              id="search-button"
            />
          </div>
        </div>
      </form>
      <section className="weather-section">
        <div>
          <div className="city">
            <span id="city">Tehran</span>
            <span>, </span>
            <span id="country">Iran</span>
          </div>
          <div className="time">
            Last updated: <span id="date"></span>
          </div>
          <ul className="list">
            <li>
              Humidty: <span id="humidity">20</span>%
            </li>
            <li>
              Wind: <span id="wind">50</span> km/h
            </li>
          </ul>
        </div>
        <div>
          <div className="current-weather">
            <div className="icon">
              <img
                className="icon"
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
                alt="cloudy"
                id="icon"
              />
              <div className="description" id="description">
                Clear
              </div>
            </div>
            <h3 className="temperature">
              <span id="temperature">10</span>
              <span className="unit">°</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="forecast-weather" id="forecast"></section>
      <p className="footer">
        <a
          href="https://github.com/sara-si/shecodesplus-project"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Sara Sarabi
      </p>
    </div>
  );
}
