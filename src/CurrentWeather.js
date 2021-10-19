import React from "react";

export default function CurrentWeather() {
  return (
    <div className="col-8">
      <div className="line" id="text">
        <li>
          <ul>
            <span id="temp">21</span>
            °C
          </ul>
          <ul>
            <span id="description"></span>
          </ul>
          <ul>
            <span>
              Humidity <span id="humidity">30</span>%
            </span>
          </ul>
          <ul>
            <span>
              Wind <span id="wind">2</span> km/h
            </span>
          </ul>
        </li>
      </div>
    </div>
  );
}
