import React from "react";

import "./Widget.css";
import ChangeTheme from "./ChangeTheme";
import Forecast from "./Forecast";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import City from "./City";
import LastUpdate from "./LastUpdate";

export default function Widget() {
  return (
    <div className="Widget">
      <div className="container">
        <div className="card default-theme" id="widget">
          <div className="card-body">
            <div className="row first-row">
              <div className="col-8 left-pilar">
                <Search />
                <div className="row second-row">
                  <City />
                  <div className="row">
                    <CurrentWeather />
                    <CurrentWeatherIcon />
                  </div>
                </div>
                <div className="row">
                  <LastUpdate />
                </div>
              </div>
              <div className="col-4 right-col">
                <div id="forecast">
                  <Forecast date="Monday" tempMin={10} tempMax={18} icon="☁" />
                  <Forecast
                    date="Tuesday"
                    tempMin={16}
                    tempMax={23}
                    icon="🌞"
                  />
                  <Forecast
                    date="Wednesday"
                    tempMin={8}
                    tempMax={17}
                    icon="☔"
                  />
                  <Forecast
                    date="Thursday"
                    tempMin={11}
                    tempMax={20}
                    icon="🌩"
                  />
                  <Forecast date="Friday" tempMin={9} tempMax={15} icon="🌧" />
                </div>
              </div>
            </div>
            <div className="row third-row change-theme" id="text">
              <ChangeTheme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
