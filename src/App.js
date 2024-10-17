import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/JessicaBoos" target="_blank">
            Jessica Boos
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/JessicaBoos/weather-app-react"
            target="_blank"
          >
            open sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
