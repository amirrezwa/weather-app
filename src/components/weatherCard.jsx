import './weatherCard.css';

function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="weather-card">
      <img src={iconUrl} alt={weather.weather[0].description} className="weather-icon" />
      <h2>{weather.name}</h2>
      <p className="description">{weather.weather[0].description}</p>
      <p className="temp">{Math.round(weather.main.temp)}°C</p>
      <div className="details">
        <p>رطوبت: {weather.main.humidity}%</p>
        <p>باد: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;