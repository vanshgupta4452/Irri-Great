import React from 'react';
import SummaryItem from './summary_item/summary_item'; // Import the SummaryItem component
import './summary.css';

const Summary = () => {
  const summaryData = [
    {  title: 'Soil Moisture', value: 'Moisture: 30%' , className:'green-bg'},
    { title: 'Water ', value: 'Volume: 30L' , className:'red-bg' },
    
    // ... other data
  ];
  const summaryData2 = [
    
    {  title1: 'Soil Moisture', value1: 'Moisture: 30%' , className:'blue-bg'},
    { title1: 'Water ', value1: 'Volume: 30L' , className:'yellow-bg' },
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
      <div className="summary-grid">
        {summaryData2.map((item) => (
          <SummaryItem key={item.title1}  title={item.title1} value={item.value1} className={item.className}/>
          
        ))}
      </div>
    </div>
  );
};

export default Summary;