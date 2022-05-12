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
      data: [33, 53, 85, 41, 44, 40],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};


function Demo() {
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
        در این آزمون, داده های یک رای گیری فرضی 6 دقیقه ای بر روی نمودار مشاهده خواهد شد
        هر 6 ثانیه, مجموع آرای اخذ شده تا  آن لحظه بر روی نمودار و باکس گوشه بالا سمت راست نمودار نمایش داده خواهد شده
        از شرکت کننده خواسته میشود تا قبل از گذر 4 دقیقه از رای گیری, از داده های مشاهده شده
        مجموع تعداد آرا را تخمین زده و در جعبه سمت راست وارد نماید.
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
        <p></p>
        <a href="/2-training" class="button">Trainig (for train group)</a>

      </div>

    </div>
  );
}

export default Demo;
