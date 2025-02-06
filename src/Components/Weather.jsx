import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchDefaultLocation = async () => {
      const defaultLocation = "Veles";
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);
      setData(response.data);
    };
    fetchDefaultLocation();
  }, []);

  const search = async () => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      if (response.data.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(response.data);
        setLocation("");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setData({ notFound: true });
      } else {
        console.error(error);
      }
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "Clouds":
        return <i className="bx bxs-cloud"></i>;
      case "Rain":
        return <i className="bx bxs-cloud-rain"></i>;
      case "Clear":
        return <i className="bx bxs-sun"></i>;
      case "Thunderstorm":
        return <i className="bx bxs-cloud-lightning"></i>;
      case "Snow":
        return <i className="bx bxs-cloud-snow"></i>;
      case "Haze":
      case "Mist":
        return <i className="bx bxs-cloud"></i>;
      default:
        return <i className="bx bxs-cloud"></i>;
    }
  };

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name}</div>
        </div>
        <div className="search-location">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={handleInputChange}
          />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>
      <div className="weather-data">
        {data.weather &&
          data.weather[0] &&
          getWeatherIcon(data.weather[0].main)}
        <div className="weather-type">
          {data.weather ? data.weather[0].main : null}
        </div>
        <div className="temperature">
          {data.main ? `${Math.floor(data.main.temp)}°C` : null}
        </div>
      </div>
    </div>
  );
};

export default Weather;
