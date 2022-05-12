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
      data: [90, 80, 85, 41, 32,40],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};


function Training() {
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
        <h5>
          سوگیری شناختی لنگر:
          در این سوگیری شناختی, داده های اولیه, تصمیم گیری کاربر را در مورد کل داده ها تحت تاثیر قرار میدهد
          به طور مثال مقادیر بسیار زیاد یا بسیار پایین ابتدای رای گیری, میتواند تخمین نهایی را
          به سمت مقادیر پایین تر یا بالاتر از آنچه که هست, سوق دهد.
        </h5>
      </div>
      </div>
      </div>

      <div class="view2">
        <div class="timer">
          03:01
        </div>
        <div className="stop-btn">
          <button disabled>Stop</button>
        </div>
        <div class="guess-input">
          <input type="text" pattern="[0-9]*" disabled />
          <input type="submit" disabled />
        </div>
        
        <a href="/3" class="button">شروع آزمون</a>

      </div>

    </div>
  );
}

export default Training;
