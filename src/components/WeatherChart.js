
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from "styled-components";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherChart = ({ forecast }) => {

  if (!forecast || !forecast.list) {
    return <p>Loading chart data...</p>;
  }

  const hours = forecast.list.map(item => new Date(item.dt * 1000).getHours());
  const temps = forecast.list.map(item => item.main.temp);

  const data = {
    labels: hours,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temps,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hourly Forecast',
      },
    },
  };

  return(
  <Container>
  <Line data={data} options={options} />
  </Container>)
};

export default WeatherChart;

const Container= styled.div`

  width: 600px;
  padding: 20px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);


h5
  {text-align: center;
  margin-bottom: 20px;
  font-size: 1.2rem;}
`;