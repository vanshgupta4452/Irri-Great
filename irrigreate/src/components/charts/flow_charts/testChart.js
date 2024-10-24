import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './testChart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalUserPieChart = () => {
  const data = {
    labels: ["Customer", "Business"],
    datasets: [
      {
        data: [12, 29],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='cont'>
    <Pie data={data} />
    </div>
  )
}

export default TotalUserPieChart;