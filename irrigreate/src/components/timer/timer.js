import React from 'react';
import './timer.css'
function Timer() {
    return (
        <div className="status-container">
        <h2>Irrigation System Status</h2>
        <p>Time Remaining: <span id="time-remaining">00:00</span></p>
        <div className="status-indicator">
          <span className="status-text">OFF</span>
        </div>
        </div>
    );
  }
  
  export default Timer;
  