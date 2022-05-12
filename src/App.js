import React, { useState } from "react";
import './App.css';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'



const data = {
  labels: ["00:00", "00:06", "00:12", "00:18", "00:24", "00:30"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};


function App() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <div className="App">
      <div class="view1">
      <div class="votesbox">
      <div class="chart">
          <Line data={data} />
      </div>
      <div class="votescount">
        250
      </div>
      </div>
      <div class="introbox">
      <div class="sliderbox">
        <div class="slider">
      <input type="range" min="1" step="1" max="100" 
      onChange={(event) => setRangeval(event.target.value)}
      class="slider" id="myRange" />
      </div>
      </div>
      <br></br>
      <div class="intro">
        intro
        intro intro
      </div>
      </div>
      </div>

      <div class="view2">
        <div class="timer">
          03:01
        </div>
        <div className="stop-btn">
          <button>Stop</button>
        </div>
        <div class="guess-input">
          <input type="text" pattern="[0-9]*" />
          <input type="submit" />
        </div>
        
      </div>

    </div>
  );
}

export default App;
