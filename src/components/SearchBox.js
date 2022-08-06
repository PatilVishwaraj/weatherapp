import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBox() {
  return (
    <div id="sb-outer">
      <div id="sb-location-sym">
        <LocationOnIcon />
      </div>
      <input id="sb-query" placeholder="City name"></input>
      <button id="sb-search-btn">
        <SearchIcon />
      </button>
      <div id="sb-dropdown"></div>
    </div>
  );
}
