import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.location.name,
      country: response.data.location.country,
      description: response.data.current.condition.text,
      temperature: Math.round(response.data.current.temp_c),
      wind: Math.round(response.data.current.wind_kph),
      date: "Friday 07:00",
      humidity: response.data.current.humidity,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
    });
  }

  if (weatherData.ready) {
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
              <span id="city">{weatherData.city}</span>
              <span>, </span>
              <span id="country">{weatherData.country}</span>
            </div>
            <div className="time">
              Last updated: <span id="date">{weatherData.date}</span>
            </div>
            <ul className="list">
              <li>
                Humidty: <span id="humidity">20</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
          <div>
            <div className="current-weather">
              <div className="icon">
                <img
                  className="icon"
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                />
                <div className="description" id="description">
                  {weatherData.description}
                </div>
              </div>
              <h3 className="temperature">
                <span id="temperature">{weatherData.temperature}</span>
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
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Sara Sarabi
        </p>
      </div>
    );
  } else {
    const apiKey = "57e196ced6754eafbd1165545222212";
    let city = "New York";
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
