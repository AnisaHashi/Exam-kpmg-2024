// Første useEffect for værdata
useEffect(() => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  if (!apiKey) {
    console.error("API key is missing.");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => setCurrentWeather(`${data.main.temp}°C`))
    .catch((error) => console.error("Error fetching weather data:", error));
}, []);
