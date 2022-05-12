import React, { useState } from "react";
import './test.css';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'



const data = {
  labels: ["00:00", "00:06", "00:12", "00:18", "00:24", "00:30"],
  datasets: [
    {
      label: "شمارش آرا",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};


function Test() {
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
        <h4>
        لطفا تا قبل اتمام شمارش معکوس
        نتایج را مشاهده کرده و در صورت نیاز با استفاده از نوار لغزان
        داده های قبلی را مشاهده نمایید
        سپس با کلیک روی دکمه توقف, دریافت داده را متوقف کرده و تخمین خود را وارد نمایید.
        </h4>
      </div>
      </div>
      </div>

      <div class="view2">
        <div class="timer">
          03:01
        </div>
        <div className="stop-btn">
          <button>توقف</button>
        </div>
        <div class="guess-input">
          <input type="text" pattern="[0-9]*" />
          <input type="submit" />
        </div>
        <a href="/4" class="button">پایان</a>
        
      </div>

    </div>
  );
}

export default Test;
