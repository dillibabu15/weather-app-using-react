import React, { useState, useEffect,useRef } from 'react';
import "./Weather.css";
import searchicon from '../assets/search.png';
import clearicon from '../assets/clear.png';
import humidityicon from '../assets/humidity.png';
import windicon from '../assets/wind.png';
import cloudicon from '../assets/cloud.png';
import rainicon from '../assets/rain.png';
import drizzleicon from '../assets/drizzle.png';
import snowicon from '../assets/snow.png';

const Weather = () => {
    const inputRef = useRef()


  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const allIcons = {
    '01d': clearicon,
    '01n': clearicon,
    '02d': cloudicon,
    '02n': cloudicon,
    '03d': cloudicon,
    '03n': cloudicon,
    '04d': cloudicon,
    '04n': cloudicon,
    '09d': rainicon,
    '09n': rainicon,
    '10d': rainicon,
    '10n': rainicon,
    '11d': drizzleicon,
    '11n': drizzleicon,
    '13d': snowicon,
    '13n': snowicon,
  };

  const search = React.useCallback(async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      );
      const data = await response.json();
      if (data.cod !== 200) {
        setWeather(null);
        return;
      }
      const icon = allIcons[data.weather[0].icon] || clearicon;
      setWeather({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weatherIcon: icon,
      });
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  }, []);

  useEffect(() => {
    search('chennai'); // Default city
  }, [search]);

  const handleInputChange = (e) => setCity(e.target.value);

  const handleSearch = () => {
    if (city.trim()) search(city);
  };

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input
        ref={inputRef}
          type='text'
          placeholder='Search'
          value={city}
          onChange={handleInputChange}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
        <img
          src={searchicon}
          alt='search-icon'
          style={{ cursor: 'pointer' }}
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      {weather ? (
        <>
          <img src={weather.weatherIcon} alt='weather-icon' className='weather-icon' />
          <p className='temperature'>{weather.temperature}°C</p>
          <p className='location'>{weather.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidityicon} alt='humidity-icon' />
              <div>
                <p className='data-title'>Humidity</p>
                <p className='data-value'>{weather.humidity}%</p>
              </div>
            </div>
            <div className="col">
              <img src={windicon} alt='wind-icon' />
              <div>
                <p className='data-title'>Wind Speed</p>
                <p className='data-value'>{weather.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p style={{ marginTop: 20 }}>No weather data found.</p>
      )}
    </div>
  );
};

export default Weather;