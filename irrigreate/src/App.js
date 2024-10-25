import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
//import axios from 'axios';
import Summary from './components/summary/summary';
import Status from './components/status/status';
import Timer from './components/timer/timer';
import Weather from './components/weather/weather';

import MyChartComponent from './components/charts/flow_charts/data';
import TotalUserPieChart from './components/charts/flow_charts/testChart';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import './App.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function App() {
  const [sampleData, setSampleData] = useState([]);

  // Function to sort and filter data, keeping only the last 5 months
  const filterLastFiveMonths = (data) => {
    // Parse months into Date objects for comparison (e.g., January -> 2024-01)
    const parsedData = data.map(item => ({
      ...item,
      dateObj: new Date(`2024 ${item.month} 01`), // Adjust the year if needed
    }));

    // Sort data based on dateObj (most recent first)
    const sortedData = parsedData.sort((a, b) => b.dateObj - a.dateObj);

    // Keep only the last 5 entries
    const filteredData = sortedData.slice(0, 5);

    // Reverse data to make it chronological (oldest first)
    const chronologicalData = filteredData.reverse();

    // Remove dateObj field before setting state
    return chronologicalData.map(({ dateObj, ...rest }) => rest);
  };

  // Fetch data from the JSON file
  const fetchData = () => {
    fetch('/app.json')
      .then(response => response.json())
      .then(data => {
        // Apply filtering to keep only the last 5 months
        const filteredData = filterLastFiveMonths(data);
        // Transform data to match the format needed by the chart
        const formattedData = filteredData.map(item => ({
          x: item.month,
          y: item.value,
        }));
        setSampleData(formattedData);
      })
      .catch(error => console.error('Error fetching JSON data:', error));
  };

  // Fetch data every few seconds
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Define chart data and options
  const canvasData = {
    datasets: [
      {
        label: 'Home',
        borderColor: 'navy',
        pointRadius: 0,
        fill: true,
        backgroundColor: 'yellow',
        lineTension: 0.4,
        data: sampleData,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          color: 'red',
          font: {
            family: 'Nunito',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          color: 'green',
          font: {
            family: 'Nunito',
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: '10rem',
    maxWidth: '540px',
    width: '100%',
    border: '1px solid #C4C4C4',
    borderRadius: '0.375rem',
    padding: '0.5rem',
  };

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

  return (
    <div className='papa'>
      <NavBar />
      <div className='body'>
        <div className='row1'>
          <div className="container">
            <Summary />
            <div style={graphStyle} className="graph">
              <Line id="home" options={options} data={canvasData} />
            </div>
            <Weather/>
          </div>
          <div className='status'>
            <Status />
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
