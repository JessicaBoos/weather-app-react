import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);

    return (
      <div className="WeatherForecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    const apiKey = "bb5982aa3c1a3d9fb3839bo024tffc09";
    let query = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
