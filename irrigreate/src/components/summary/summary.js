import React from 'react';
import SummaryItem from './summary_item/summary_item'; // Import the SummaryItem component
import './summary.css';

const Summary = () => {
  const summaryData = [
    {  title: 'Soil Moisture', value: 'Moisture: 30%' , className:'green-bg'},
    { title: 'Water ', value: 'Volume: 30L' , className:'red-bg' },
    // ... other data
  ];

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div className="summary-grid">
        {summaryData.map((item) => (
          <SummaryItem key={item.title}  title={item.title} value={item.value} className={item.className}/>
          
        ))}
      </div>
    </div>
  );
};

export default Summary;