import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ countryName }) => {
  const [weatherInfo, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countryName}`)
      .then((response) => {
        setInfo(response.data);
      });
  });

  try {
    return (
      <div>
        <h3>Weather in {countryName}</h3>
        <p>
          <strong>Temperature:</strong> {weatherInfo.current.temperature} celsius
        </p>
        <img src={weatherInfo.current.weather_icons[0]} alt={weatherInfo.current.weather_descriptions[0]} />
        <p>
          <strong>Wind: </strong>
          {weatherInfo.current.wind_speed} mph direction {weatherInfo.current.wind_dir}
        </p>
      </div>
    );
  } catch (UncaugthTypeError) {
    return null;
  }
};

export default Weather;
