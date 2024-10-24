import React from 'react';
import NavBar from './components/NavBar';

import Summary from './components/summary/summary';
import Status from './components/status/status';
import Timer from './components/timer/timer'
import MyChartComponent from './components/charts/flow_charts/data';
import TotalUserPieChart from './components/charts/flow_charts/testChart';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import './App.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function App() {
  // Define sample data for the chart
  const sampleData = [
    { x: 'January', y: 30 },
    { x: 'February', y: 40 },
    { x: 'March', y: 35 },
    { x: 'April', y: 50 },
    { x: 'May', y: 45 },
  ];

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
        <TotalUserPieChart />
        </div>
        <div className='status'>
        <Status/>
        <Timer/>
        </div>
        </div>
      </div>

      {/* Other components */}
    </div>
  );
  
}

export default App;
