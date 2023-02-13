import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <h3 className="temperature">
          <span>{props.celsius}</span>
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="temperature">
          <span>{Math.round(fahrenheit())}</span>
          <span className="unit">
            <a href="/" onClick={convertToCelsius}>
              {" "}
              °C
            </a>{" "}
            | °F
          </span>
        </h3>
      </div>
    );
  }
}
