import React, { useState, useEffect } from 'react';
import { getCurrentWeather, getWeatherForecast } from './components/api';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherChart from './components/WeatherChart';
import styled from 'styled-components';

function App() {
  const [location, setLocation] = useState('New York');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherData = async (location) => {
    const weatherData = await getCurrentWeather(location);
    setCurrentWeather(weatherData);

    const forecastData = await getWeatherForecast(location);
    setForecast(forecastData);
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  return (
    <Container>
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={setLocation} />
      {currentWeather ? <WeatherCard weather={currentWeather} /> : <p>Loading weather...</p>}
      {forecast ? <WeatherChart forecast={forecast} /> : <p>Loading forecast...</p>}
    </div>
    </Container>
  );
}

export default App;

const Container= styled.div`

  padding: 40px;
  text-align: center;
  background-image: url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img
  {
  width:auto;
  height:auto
}

h1
  {margin-bottom: 40px;
  font-size: 2.5rem;
  color: white;}
`;