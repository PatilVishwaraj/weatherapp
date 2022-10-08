import React, { useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [data, setData] = useState({});
  const [data8, setData8] = useState({});
  const [location, setLocation] = useState('');
  function locate() {
    console.log('give location permission');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getweather1);
    }
  }
  function getweather1(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f874a2d1b7c97a14944dbed2543e804c`;
    axios.get(url1).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    weekForcast(position);
  }
  const searchBar = (event) => {
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f874a2d1b7c97a14944dbed2543e804c`;
    console.log('location:', location);
    axios.get(url2).then((response) => {
      setData8(response.data);
      console.log(response.data);
    });
  };
  function weekForcast(position) {
    let lat1 = position.coords.latitude;
    let lon1 = position.coords.longitude;
    let url3 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&exclude=7&appid=449bf43674a2731274c0fb25c65d30b1&units=metric`;
    axios.get(url3).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }
  return (
    <div className="App">
      <>
        <div id="sb-outer">
          <div id="sb-location-sym" onClick={locate}>
            <LocationOnIcon />
          </div>
          <input id="sb-query" placeholder="City name" />
          <button id="sb-search-btn" onClick={searchBar}>
            <SearchIcon />
          </button>
          <div id="sb-dropdown"></div>
        </div>
      </>
      <>
        <div id="slb-outer">
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
          <div className="slb-daycard">
            <div className="slb-daydetails">
              <p>day</p>
              <p>
                <span>maxt</span>
                <span>mint</span>
              </p>
              <img
                src="/images/trial.svg"
                className="slb-dataicon"
                alt=""
              ></img>
              <p>Clouds</p>
            </div>
          </div>
        </div>
      </>
      <>
        <div id="gb-outer">
          <div id="gb-details1">
            <h1>26°C</h1>
            <img
              className="curr-image"
              src="/images/trial.svg"
              alt="cloud"
            ></img>
          </div>
          <div id="gb-graph1"></div>
          <div id="gb-details2">
            <div className="gb-d1">
              <span className="bold">Pressure</span>
              <span>998 hpa</span>
            </div>
            <div className="gb-d2">
              <span className="bold">Humidity</span>
              <span>91 %</span>
            </div>
          </div>
          <div id="gb-graph2">
            <div className="gb-graph2-details">
              <div className="gb-g2-d">
                <span className="bold">Sunrise</span>
                <span>6:17am</span>
              </div>
              <div className="gb-g2-d">
                <span className="bold">Sunset</span>
                <span>7:10pm</span>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
