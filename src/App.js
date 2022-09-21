import React from 'react';
import GraphBox from './components/GraphBox/App';
import SearrchBox from './components/SearchBox/App';
import SliderBox from './components/SliderBox/App';

function App() {
  return (
    <div className="App">
      <SearrchBox />
      <SliderBox />
      <GraphBox />
    </div>
  );
}

export default App;
