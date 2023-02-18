import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <section className="weather-section">
      <div>
        <div className="city">
          <span>{props.data.city}</span>
          <span>, </span>
          <span>{props.data.country}</span>
        </div>
        <div className="time">
          Last updated:{" "}
          <span>
            <FormattedDate date={props.data.date} />
          </span>
        </div>
        <ul className="list">
          <li>
            Humidty: <span>{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span>{props.data.wind}</span> km/h
          </li>
        </ul>
      </div>
      <div>
        <div className="current-weather">
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={48} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="description">{props.data.description}</div>
      </div>
    </section>
  );
}
