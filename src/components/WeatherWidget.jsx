import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

export const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = "YOUR_API_KEY";
      const LAT = 59.9139;
      const LON = 10.7522;
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=${LON}&exclude=minutely&units=metric&appid=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the weather data", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!weatherData) {
    return <div className="text-center">No weather data available</div>;
  }

  const current = weatherData.current;
  const daily = weatherData.daily;

  return (
    <div
      className="card text-center"
      style={{ width: "18rem", margin: "auto", marginTop: "50px" }}
    >
      <div className="card-body">
        <h5 className="card-title">Oslo Weather</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {new Date(current.dt * 1000).toLocaleDateString()}
        </h6>
        <div className="card-text">
          <p>
            <strong>{current.temp}°C</strong>
          </p>
          <p>{current.weather[0].description}</p>
          <p>
            <i className={`wi wi-owm-${current.weather[0].id}`} />
          </p>
        </div>
        <h6 className="mt-3">Next 7 Days</h6>
        <ul className="list-group list-group-flush">
          {daily.slice(1, 8).map((day, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex justify-content-between">
                <span>{new Date(day.dt * 1000).toLocaleDateString()}</span>
                <span>
                  {day.temp.day}°C{" "}
                  <i className={`wi wi-owm-${day.weather[0].id}`} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
