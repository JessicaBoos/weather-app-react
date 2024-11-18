import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row">
      <div className="col">
        <div className="WeatherForecastDay">{day()}</div>
        <WeatherIcon code={props.data.condition.icon} size={48} />

        <div className="WeatherForecastTemp">
          <span className="WeatherForecastTempMax">
            {Math.round(props.data.temperature.maximum)}°
          </span>{" "}
          <span className="WeatherForecastTempMin">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    </div>
  );
}
