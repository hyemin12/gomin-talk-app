import React from "react";
import "../main.scss";

import Clock from "react-live-clock";

function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-bar-column">
        <div className="clock">
          <Clock format="HH:mm" ticking={true} />
        </div>
      </div>
      <div className="status-bar-column">
        <ul className="status-bar-icon-list">
          <li className="fas fa-clock status-bar-icon"></li>
          <li className="fas fa-volume-mute status-bar-icon"></li>
          <li className="fas fa-wifi status-bar-icon"></li>
          <li className="fas fa-battery-full status-bar-icon"></li>
        </ul>
      </div>
    </div>
  );
}
export default StatusBar;
