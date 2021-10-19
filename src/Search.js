import React from "react";
import axios from "axios";

export default function Search() {
  return (
    <div className="search-functions">
      <form className="search">
        <input
          type="text"
          placeholder="Enter your city"
          className="search-box search"
          id="city-input"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="search-button search" />
      </form>
      <button className="current-location-button search">📍</button>
    </div>
  );
}
