import { useState } from 'react';
import './App.css';
import WeatherCard from './components/weatherCard';
import Search from './components/search';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error('شهر پیدا نشد!!!');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${weatherData && weatherData.weather[0].icon.includes('n') ? 'night' : 'day'}`}>
      <h1>وضعیت آب‌وهوا</h1>
      <Search onSearch={fetchWeather} />
      {loading && <p className="loading">در حال دریافت اطلاعات...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}

export default App;
