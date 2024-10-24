import React from 'react';
import './weather.css';
import image from './image.png';

const Weather = () => {
  return (
    <div className="weather-forecast">
      <div className="weather-icon">
        <img src={image} alt="Sunny" /> {/* Self-closing tag */}
      </div>
      <div className="weather-details">
        <p className='info'><b>28 °C</b></p>
        <p className='info'>Sunny</p>
        <p className='info'>48% Chance of Rain</p>
        <p className='info'>Humidity: 61%</p>
      </div>
    </div>
  );
}

export default Weather;
