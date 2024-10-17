import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  const fahrenheit = (props.celsius * 9) / 5 + 32;

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="degrees">
          °C |{" "}
          <a href="/" onClick={() => handleUnitChange("fahrenheit")}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{fahrenheit.toFixed(2)}</span>
        <span className="degrees">
          <a href="/" onClick={() => handleUnitChange("celsius")}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
