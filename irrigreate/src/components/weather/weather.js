// import React from 'react';
// import './weather.css';
// import image from './image.png';

// const Weather = () => {
//   return (
//     <div className="weather-forecast">
//       <div className="weather-icon">
//         <img src={image} alt="Sunny" /> {/* Self-closing tag */}
//       </div>
//       <div className="weather-details">
//         <p className='info'><b>28 °C</b></p>
//         <p className='info'>Sunny</p>
//         <p className='info'>48% Chance of Rain</p>
//         <p className='info'>Humidity: 61%</p>
//       </div>
//     </div>
//   );
// }

// export default Weather;
// components/weather/Weather.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Weather.css'; // Optional: add your CSS file for styling

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const apiKey = 'afa00752584012542956f04e45cd7d80'; // Replace with your OpenWeather API key
//   const city = 'New Delhi'; // Change to your desired city
//   const units = 'metric'; // Use 'imperial' for Fahrenheit

//   useEffect(() => {
//     const fetchWeather = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`https://api.openweathermap.org/data/3.0/weather?q=${city}&units=${units}&appid=${apiKey}`);
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [city, apiKey, units]);

//   return (
//     <div className="weather-info">
//       {loading ? (
//         <p>Loading weather data...</p>
//       ) : weatherData ? (
//         <>
//           <h2>Weather in {weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Condition: {weatherData.weather[0].description}</p>
//         </>
//       ) : (
//         <p>No weather data available.</p>
//       )}
//     </div>
//   );
// };

// export default Weather;

import React, { useEffect, useState } from 'react';
import './weather.css';
import axios from 'axios';
import image from './image.png'; // This can be a default image

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = 'afa00752584012542956f04e45cd7d80'; // Replace with your OpenWeather API key
  const city = 'New Delhi'; // Change to your desired city
  const units = 'metric'; // Use 'imperial' for Fahrenheit

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey, units]);

  return (
    <div className="weather-forecast">
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <>
          <div className="weather-icon">
            <img src={image} alt={weatherData.weather[0].description} />
          </div>
          <div className="weather-details">
            <p className='info'><b>{Math.round(weatherData.main.temp)} °C</b></p>
            <p className='info'>{weatherData.weather[0].description}</p>
            <p className='info'>{weatherData.pop ? `${Math.round(weatherData.pop * 100)}% Chance of Rain` : 'No rain expected'}</p>
            <p className='info'>Humidity: {weatherData.main.humidity}%</p>
          </div>
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
}

export default Weather;


