import React from 'react';
import { Bar } from 'react-chartjs-2';

const MyChartComponent = () => {
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3'],
    datasets: [{
      label: 'Soil Moisture',
      data: [30, 25, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          // Customize your chart options here
        }}
      />
    </div>
  );
};

export default MyChartComponent;