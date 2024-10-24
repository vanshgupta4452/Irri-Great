import React from 'react';
import { Bar } from 'react-chartjs-2';

// Register necessary components for Chart.js (Remove if not used directly)
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components if you need them in other parts of your code
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ chartData }) => {
  // Handle potential errors in chartData
  if (!chartData || !chartData.labels || !chartData.datasets) {
    return <div>Invalid chart data</div>;
  }

  // Render the bar chart
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Product Sales"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;
