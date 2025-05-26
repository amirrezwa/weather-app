import { useState } from "react";
import Search from "./components/search";
import WeatherCard from "./components/weatherCard";
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDay, setIsDay] = useState(true);

  const fetchWeather = async (city) => {
    try {
      setError("");
      setWeather(null);
      setLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3a0564d4b1fc49109c4215ecb5f80b10`
      );

      if (!res.ok) {
        throw new Error("!شهر پیدا نشد");
      }

      const data = await res.json();
      setWeather(data);

      const currentTime = data.dt;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      setIsDay(currentTime >= sunrise && currentTime <= sunset);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${isDay ? "day" : "night"}`}>
      <h1>وضعیت آب‌وهوا 🌤️</h1>
      <Search onSearch={fetchWeather} />

      {loading && <p>...در حال دریافت اطلاعات</p>}
      {error && <p className="error">{error}</p>}
      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
