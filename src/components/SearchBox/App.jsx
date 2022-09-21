import React, { useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  function locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getweather1);
    }
  }

  function getweather1(position) {}
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&cnt=08&appid=f874a2d1b7c97a14944dbed2543e804c`;
  const searchBar = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      });
    }
  };
  locate();
  return (
    <div id="sb-outer">
      <div id="sb-location-sym">
        <LocationOnIcon />
      </div>
      <input
        id="sb-query"
        placeholder="City name"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchBar}
      />
      <button id="sb-search-btn">
        <SearchIcon />
      </button>
      <div id="sb-dropdown"></div>
    </div>
  );
}
