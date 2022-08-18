import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchWeather() {
  let [cityName, setCityname] = useState("");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setResult(true);
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=af299e40c9c7667df5a6bc3d09004719&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCityname(event) {
    setCityname(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCityname}
      />
      <button type="Submit"> Search</button>
    </form>
  );

  if (result) {
    return (
      <div>
        <div className="form">{form}</div>
        <div>
          <WeatherInfo data={weather} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}