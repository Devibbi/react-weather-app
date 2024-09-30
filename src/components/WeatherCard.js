import React from 'react';
import styled from "styled-components";
const WeatherCard = ({ weather }) => {
  if(typeof weather.error!='undefined' && weather.error.length > 0){
    return(
      <Container>
        <div>
          {weather.error}
        </div>
      </Container>
    )
  }
  return (
    <Container>
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
    </Container>
  );
};

export default WeatherCard;
const Container= styled.div`
width: 300px;
  padding: 20px;
  margin: 10px auto;
  background-color: #f8f9fa;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;


h5
  {font-size: 1.5rem;
  margin-bottom: 15px;
  }

p
  {margin: 5px 0;
  font-size: 1rem;}
  `;

