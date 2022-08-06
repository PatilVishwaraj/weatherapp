// import React, { useState } from 'react';
import React from 'react';
// import axios from 'axios';
import SearchBox from './components/SearchBox';
import GraphBox from './components/GraphBox';
import SliderBox from './components/SliderBox';

function App() {
  // let lat;
  // let lon;
  // let cityname;
  // const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f874a2d1b7c97a14944dbed2543e804c`;
  // `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=f874a2d1b7c97a14944dbed2543e804c`
  // const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f874a2d1b7c97a14944dbed2543e804c`;

  return (
    <div className="App">
      <SearchBox></SearchBox>
      <SliderBox></SliderBox>
      <GraphBox></GraphBox>
    </div>
  );
}

export default App;
