import React from "react";
import "./Weather.css";

export default function Weather(props) {
  if (props.weather) {
    return (
      <div className="container Weather mt-4">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3 className="location">
              {props.weather.city}, {props.weather.country}
            </h3>
            <ul>
              <li>Temperature: {Math.round(props.weather.temperature)}°C </li>
              <li className="description">
                Description: {props.weather.description}
              </li>
              <li>Humidity: {props.weather.humidity}%</li>
              <li>Wind: {Math.round(props.weather.wind * 3.6)}km/h </li>
              <li>
                <img
                  alt=""
                  src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
                ></img>
              </li>
            </ul>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  } else if (props.searching) {
    return (
      <div className="mt-4 spinner">
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  } else {
    return null;
  }
}
