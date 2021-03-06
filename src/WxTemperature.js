import React, { useState } from "react";
import "./WxTemperature.css";

export default function WxTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {

    return(
      <div className="WxTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C | {" "}<a href="/" onClick={toFahrenheit}>°F</a></span>
      </div>
   );

}else {
  let fahrenheit = (props.celsius * 9 / 5) + 32;

    return (
      <div className="WxTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit"><a href="/" onClick={toCelsius}>°C</a> |{" "}°F</span>
      </div>
    );
  }
}
