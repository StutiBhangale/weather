import React from "react";
import { useState,useEffect } from "react";

const api = {
  key: "2810b40f83b1dc5957a474ff0771f21d",
  base: "https://api.openweathermap.org/data/2.5/"
};

function Weather() {
  const [search, setSearch] = useState("pune");
  const [weather, setWeather] = useState({});

  const Search = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  useEffect(()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });
  }, []);

  return (
    <div className="App">
        <header className="App-header">
        <div>
          <input
            type="text"
            placeholder="Enter city"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={Search}>Search</button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div className="info">
            <p>{weather.name}</p>

            <p>{weather.main.temp} C</p>

            <p>{weather.weather[0].main}</p>
          </div>
        ) : (
          ""
        )}

        </header>
    </div>
  );
}
export default Weather;
