import React from "react";
import './App.css';
import SearchWeather from './SearchWeather';

function App() {
  return (
    <div className="App">
        <header className="App-header"><h1>LOFI WEATHER APP</h1></header >
        <SearchWeather />
        <p><a href="https://github.com/isabelklint/weatherreact">Open-source code</a> by <a href="https://www.linkedin.com/in/isabel-klint/">Isabel Klint</a>, <a href="https://www.shecodes.io/">SheCodes</a> class project.</p>
    </div>
  );
}

export default App;
