import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let [search, setSearch] = useState(false);

  function updateWeather(response) {
    if (response) {
      setSearch(false);
      setWeather({
        city: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
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

    let apiKey = "6a708bcc0ed405fb557dac7cbbae970f";
    let firstCallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${firstCallUrl}&appid=${apiKey}`).then(updateWeather);
    setSearch(true);
    setWeather(null);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control-sm"
          type="search"
          onChange={updateCity}
          placeholder="Search for a city"
          autoComplete="off"
        />
        <button type="submit" disabled={search}>
          Search
        </button>
      </form>
      <Weather weather={weather} searching={search} />
    </div>
  );
}
