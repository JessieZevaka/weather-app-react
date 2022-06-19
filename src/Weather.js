import React from "react";
import NumberRound from "./NumberRound";
import "./Weather.css";

export default function Weather(props) {
  if (props.weather) {
    return (
      <div className="container">
        <div className="row feature pb-4">
          <div className="col-12 media-center">
            <div className="temp-text mt-4">
              {props.weather.city}, {props.weather.country}
            </div>
            <h3>
              {props.weather.localTime.day} {props.weather.localTime.time}
            </h3>
          </div>
        </div>
        <div className="row feature pb-4">
          <div className="col-12 col-sm-4 media-center">
            <img
              alt=""
              src={`http://openweathermap.org/img/wn/${props.weather.icon}@4x.png`}
            ></img>
          </div>

          <div className="col-12 col-sm-4 media-center">
            <span className="temp-text-two">
              <NumberRound>{props.weather.temperature}</NumberRound>°
            </span>
            <h4 className="conditions description">
              {props.weather.description}
            </h4>
          </div>

          <div className="col-12 col-sm-4 media-center">
            <p className="mt-2">
              <i className="fa-solid fa-temperature-empty"></i> L:{" "}
              <NumberRound>{props.weather.low}</NumberRound>°{" "}
              <i className="fa-solid fa-temperature-full"></i> H:{" "}
              <NumberRound>{props.weather.high}</NumberRound>°{" "}
            </p>
            <p>
              Feels Like: <NumberRound>{props.weather.feelslike}</NumberRound>°
            </p>
            <p>Humidity: {props.weather.humidity}%</p>
            <p>
              Wind: <NumberRound>{props.weather.wind * 3.6}</NumberRound> km/h
            </p>

            <div className="fcbuttons mt-4">
              <button className="selected">°C</button>
              <button>°F</button>
            </div>
          </div>
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
