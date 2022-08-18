import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="box">
      <h1>{props.data.cityName}</h1>
      <ul>
        <li>Temperature: {Math.round(props.data.temperature)}°C</li>
        <li>Wind: {props.data.wind}km/h</li>
        <li>Humdity: {props.data.humidity}%</li>
        <li>
          <WeatherIcon code={props.data.icon} size={100} />
        </li>
        <li>Description: {props.data.description}</li>
      </ul>
    </div>
  );
}
