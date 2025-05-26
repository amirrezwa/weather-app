import './weatherCard.css';

function WeatherCard({ weather }) {
    const iconCode = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
    return (
      <div className="weather-card">
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
        <img src={iconUrl} alt={weather.weather[0].description} />
        <p>دما: {weather.main.temp}°C</p>
        <p>رطوبت: {weather.main.humidity}%</p>
        <p>وضعیت: {weather.weather[0].description}</p>
        <p>باد: {weather.wind.speed} متر/ثانیه</p>
      </div>
    );
  }
  
  export default WeatherCard;
  