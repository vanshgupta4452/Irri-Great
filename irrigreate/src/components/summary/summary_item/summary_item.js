import React from 'react';
import './summary-item.css';

const SummaryItem = ({ icon, title, value, className }) => {
  return (
    <div className={`summary-item ${className}`}>
      
      <div className="summary-details">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
