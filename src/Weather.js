import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import BeatLoader from "react-spinners/BeatLoader";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [date, setDate] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function getTimeCity(response) {
    console.log(response.data);
    setDate(FormattedDate(response.data.datetime));
  }
  function search() {
    let apiKey = "d7aec0985a4dfc5716c1a4be7047083e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    let apiKey2 = "252fddf1e9f945359b0239bd009d9be4";
    let apiTimeUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey2}&location=${city}`;
    axios.get(apiTimeUrl).then(getTimeCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row search">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city..."
                className="form-control search-input"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} date={date} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <Footer />
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading">
        <BeatLoader color="#00bbcb" />
      </div>
    );
  }
}
