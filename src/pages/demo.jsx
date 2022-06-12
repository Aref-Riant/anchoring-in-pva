import React, { useState, useEffect } from "react";
import "./test.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Cookies from "universal-cookie";
import { useRef } from "react";

//const arr = [33, 53, 85, 41, 44, 40, 5, 6, 34, 90, 100, 12, 60, 50, 80, 30, 10, 120, 90, 60, 70, 20, 19];
const arr = [
  1, 1, 1, 1, 1, 33, 38, 50, 83, 89, 92, 120, 122, 130, 140, 148, 12, 60, 50,
  80, 30, 10, 120, 90, 60, 70, 20, 19, 80, 30, 10, 120, 90, 60, 70, 20, 19, 80,
  30, 10, 120, 90, 60, 70, 20, 19, 80, 30, 10, 120, 90, 60, 70, 20, 19,
];

const options = {
  scales: {
    y: {
      min: 0,
      max: 150,
      ticks: {
        stepSize: 10,
      },
    },
    
  },
  animation: {
    duration: 50,
  },
 
};

function Demo() {
  const [rangeval, setRangeval] = useState(0);
  const visibledata = arr.slice(rangeval, rangeval + 10);
  const timeRef = useRef(0);
  const timerElementRef = useRef();
  const cookies = new Cookies();

  const [label, setLabel] = useState([
    "00:00",
    "00:06",
    "00:12",
    "00:18",
    "00:24",
    "00:30",
    "00:36",
    "00:42",
    "00:48",
    "00:54",
  ]);

  

  const [time, setTime] = useState(1);
  const [stopTimer, setStopTimer] = useState(false);
  const [flag,setFlag]=useState(true);
  const intervalRef = useRef();
  useEffect(() => {
    // render time
    let temp = label;
      const interval = setInterval(() => {
        timeRef.current += 1;
        //display new time
        //set label state to 6 sec more than before
       
        if (timeRef.current % 6 === 0) {
          

          temp=temp.slice(1);
          console.log(temp);
          temp.push(time_convert(timeRef.current+54));
          setLabel(temp)
          // console.log(temp, timeRef.current);
          if (timeRef.current < 241) setRangeval((prev) => prev + 1);
       
        }
          timerElementRef.current.innerText = time_convert(timeRef.current);
          if (timeRef.current > 239) setStopTimer(true);
        
        // console.log(rangeval);
      }, 1000);
      intervalRef.current = interval;
      console.log(intervalRef.current);

      

      return () => {
        clearInterval(interval);
      };
    
    

    
  }, [flag]);
// set useEffect and interval that genereate a list in 6 sec interval



  // console.log(time);
  useEffect(() => {
    if (stopTimer) {
      console.log("clearing", { intervalRef });
      clearInterval(intervalRef.current );
    }
  }, [stopTimer]);

  const chartdata = {
    labels: label,
    datasets: [
      {
        label: "شمارش آرا",
        data: visibledata,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  function time_convert(num) {
  

  let hours = Math.floor(num / 60)<10? "0"+Math.floor(num / 60):Math.floor(num / 60);
  let minutes = num % 60? num % 60<10? "0"+num % 60:num % 60:0;
  
  return hours + ":" + minutes;
}
  

  return (

    <div className="App">

      <div className="view1">
        <div className="votesbox">
          <div className="chart">
            <Line data={chartdata} options={options} />
          </div>
          <div className="votescount slider_position">
            last count: &nbsp;
            {visibledata[visibledata.length - 1]}
          </div>
        </div>
        <div className="introbox">
          <div className="sliderbox">
            <div className="slider">
              {rangeval && (
                <input
                  type="range"
                  min="1"
                  step="1"
                  max="360"
                  onChange={(e) => {
                    if (e.target.value <= timeRef.current) {
                      setRangeval(e.target.value);
                      clearInterval(intervalRef.current);
                      setTimeout(() => {
                        console.log(e.target.value);
                        setRangeval(timeRef.current);
                        setFlag(!flag);
                      }, 4000);
                    }
                  }}
                  className="slider"
                  id="myRange"
                  value={rangeval}
                />
              )}
            </div>
          </div>
          <br></br>
          <div className="intro">
            <h5>
              در این آزمون, داده های یک رای گیری فرضی 6 دقیقه ای بر روی نمودار
              مشاهده خواهد شد هر 6 ثانیه, مجموع آرای اخذ شده تا آن لحظه بر روی
              نمودار و باکس گوشه بالا سمت راست نمودار نمایش داده خواهد شده از
              شرکت کننده خواسته میشود تا قبل از گذر 4 دقیقه از رای گیری, از داده
              های مشاهده شده مجموع تعداد آرا را تخمین زده و در جعبه سمت راست
              وارد نماید.
            </h5>
          </div>
        </div>
      </div>

      <div className="view2">
        <div className="timer" ref={timerElementRef} />

        <div className="stop-btn">
          <button onClick={() => clearInterval(intervalRef.current)}>
            Stop
          </button>
        </div>
        <div className="guess-input my-3">
          <input
            type="text"
            pattern="[0-9]*"
            disabled={timeRef.current > 239 ? false : true}
          />
          <br />
        </div>
        <div style={{  display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            disabled={timeRef.current > 239 ? false : true}
          />
        </div>

        <a href="/3" className="button">
          شروع آزمون
        </a>
        <p></p>
        <a href="/2-training" className="button">
          Trainig (for train group)
        </a>
      </div>
    </div>
  );
}

export default Demo;
// todolist
// 1.make a timer for 6 miniutes
//2.show 10 datapoints to user every second
//3.user can guess the number of votes
//4.user can guess the number of votes in 6 minutes

