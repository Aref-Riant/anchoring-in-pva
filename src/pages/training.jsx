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
      <div className="view1">
      <div className="votesbox">
      <div className="chart">
          <Line data={data} />
      </div>
      <div className="votescount">
        250
      </div>
      </div>
      <div className="introbox">
      <div className="sliderbox">
        <div className="slider">
      <input type="range" min="1" step="1" max="100" 
      onChange={(event) => setRangeval(event.target.value)}
      className="slider" id="myRange" />
      </div>
      </div>
      <br></br>
      <div className="intro">
        <h5>
          سوگیری شناختی لنگر:
          در این سوگیری شناختی, داده های اولیه, تصمیم گیری کاربر را در مورد کل داده ها تحت تاثیر قرار میدهد
          به طور مثال مقادیر بسیار زیاد یا بسیار پایین ابتدای رای گیری, میتواند تخمین نهایی را
          به سمت مقادیر پایین تر یا بالاتر از آنچه که هست, سوق دهد.
        </h5>
      </div>
      </div>
      </div>

      <div className="view2">
        <div className="timer">
          03:01
        </div>
        <div className="stop-btn">
          <button disabled>Stop</button>
        </div>
        <div className="guess-input">
          <input type="text" pattern="[0-9]*" disabled />
          <input type="submit" disabled />
        </div>
        
        <a href="/3" className="button">شروع آزمون</a>

      </div>

    </div>
  );
}

export default Training;
