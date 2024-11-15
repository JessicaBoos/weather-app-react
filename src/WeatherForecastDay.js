import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props);
  return (
    <div className="row">
      <div className="col">
        <div className="WeatherForecastDay">{props.data.time}</div>
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
