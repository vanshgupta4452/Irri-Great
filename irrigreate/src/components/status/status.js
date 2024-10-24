import React from 'react';
import './status.css';

function Status() {
  return (
    <div className="container1">
      <div className="connected-devices">
        <h2>Connected Devices</h2>
        <p>2 devices connected</p>
        <ul className="device-list">
          <li className="device connected">SM_1</li>
          <li className="device connected">FL_1</li>
          <li className="device disconnected">SM_2</li>
          <li className="device connected">SM_3</li>
          <li className="device connected">FL_2</li>
        </ul>
      </div>
    </div>
  );
}

export default Status;
