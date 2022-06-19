import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Weather from "./Weather";

function toLocalTime(dt, tzOffset) {
  let localDate = new Date(
    (dt + tzOffset + new Date().getTimezoneOffset() * 60) * 1000
  );

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return {
    time: `${localDate.getHours().toString().padStart(2, 0)}:${localDate
      .getMinutes()
      .toString()
      .padStart(2, 0)}`,
    day: weekDays[localDate.getDay()],
  };
}

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let [search, setSearch] = useState(false);

  function updateWeather(response) {
    if (response) {
      console.log(response.data);
      setSearch(false);
      const data = response.data;
      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        feelslike: data.main.feels_like,
        high: data.main.temp_max,
        low: data.main.temp_min,
        localTime: toLocalTime(data.dt, data.timezone),
      });
    } else {
      setWeather(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!city) {
      return;
    }

    requestFromApi(city);
  }

  function requestFromApi(city) {
    let apiKey = "6a708bcc0ed405fb557dac7cbbae970f";
    let firstCallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${firstCallUrl}&appid=${apiKey}`).then(updateWeather);
    setSearch(true);
    setWeather(null);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const requestFromApiCallback = useCallback(requestFromApi, []);
  useEffect(() => {
    requestFromApiCallback(props.city || "Sydney");
  }, [requestFromApiCallback, props.city]);

  return (
    <>
      <nav className="searchBar text-center">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control-lg"
            type="search"
            onChange={updateCity}
            placeholder="Search for a city"
            autoComplete="off"
          />
          <button type="submit" disabled={search}>
            Get Forecast
          </button>
          <button type="submit">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
        </form>
      </nav>
      <Weather weather={weather} searching={search} />
    </>
  );
}
