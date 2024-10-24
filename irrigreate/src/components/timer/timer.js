import React from 'react';
import './timer.css'
function Timer() {
    return (
        <div className="status-container">
        <h2>Irrigation System Status</h2>
        <p>Time Remaining: <span id="time-remaining">45:02</span></p>
        <div className="status-indicator">
          <span className="status-text">ON</span>
        </div>
        </div>
    );
  }
  
  export default Timer;
  