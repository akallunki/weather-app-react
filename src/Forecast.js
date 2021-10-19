import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Forecast(props) {
  return (
    <div className="forecast">
      <div className="col-7">
        <div className="weekday">{props.date}</div>
        <div className="forecast-temp">
          <span className="max">{props.tempMin}°C</span> |{" "}
          <span className="min">{props.tempMax}°C</span>
        </div>
        <div className="col-5 forecast-icon">{props.icon}</div>
      </div>
    </div>
  );
}
