import React, { useState, useEffect } from "react";
import "./test.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Cookies from "universal-cookie";
import { useRef } from "react";
import axios from "axios";
//const arr = [33, 53, 85, 41, 44, 40, 5, 6, 34, 90, 100, 12, 60, 50, 80, 30, 10, 120, 90, 60, 70, 20, 19];
// const arr = [
//   1, 1, 1, 1, 1, 33, 38, 50, 83, 89, 92, 120, 122, 130, 140, 148, 12, 60, 50,
//   80, 30, 10, 120, 90, 60, 70, 20, 19, 80, 30, 10, 120, 90, 60, 70, 20, 19, 80,
//   30, 10, 120, 90, 60, 70, 20, 19, 80, 30, 10, 120, 90, 60, 70, 20, 19,
// ];

function Test() {
  const [rangeval, setRangeval] = useState(0);
  const [flag1, setFlag1] = useState(false);
  const [train, setTrain] = useState(false);
  //const visibledata = arr.slice(rangeval, rangeval + 10);
  const [visibledata, setVisibledata] = useState([]);
  const [guess, setGuess] = useState(0);
  const timeRef = useRef(0);
  const timerElementRef = useRef();
  const cookies = new Cookies();
  const [arr, setArr] = useState();
  const [max, setMax] = useState(150);
  const options = {
    scales: {
      y: {
        min: 0,
        max,
        ticks: {
          stepSize: 10,
        },
      },
    },
    animation: {
      duration: 50,
    },
  };
  const onSubmit = () => {
    var data = JSON.stringify({
      guess: guess,
      guess_time: rangeval,
    });

    var config = {
      method: "post",
      url: "http://217.182.11.251/testresult/",
      headers: {
        email: cookies.get("userEmail"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://217.182.11.251/getdata/",
      headers: {
        email: cookies.get("userEmail"),
      },
    };

    axios(config)
      .then(function async(response) {
        // console.log(response.data.list.split(",").map((item) => +item));
        setArr(response.data.list.split(",").map((item) => +item));
        setMax(
          +response.data.list.split(",")[
            response.data.list.split(",").length - 1
          ]
        );
        setTrain(false);
        //setTrain(true);
        //setTime(response.data.train ? 2 : 6);
        //setTime(2);
        console.log(response.data);
        setFlag(!flag);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    //console.log("hhh");
    if (arr && arr.length > 0) {
      setVisibledata(arr.slice(rangeval, rangeval + 10));
    }
  }, [rangeval]);
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

  const [time, setTime] = useState(6);
  const [stopTimer, setStopTimer] = useState(false);
  const [flag, setFlag] = useState(true);
  const intervalRef = useRef();
  useEffect(() => {
    // render time
    let temp = label;
    const interval = setInterval(() => {
      timeRef.current += 1;
      //display new time
      //set label state to 6 sec more than before

      if (timeRef.current % time === 0) {
        //console.log(time, "tiem");
        temp = temp.slice(1);
        //console.log(temp);
        temp.push(time_convert(timeRef.current + 54));
        setLabel(temp);
        // console.log(temp, timeRef.current);
        if (timeRef.current < 241) {
          setRangeval((prev) => prev + 1);
        }
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
      clearInterval(intervalRef.current);
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
    let hours =
      Math.floor(num / 60) < 10
        ? "0" + Math.floor(num / 60)
        : Math.floor(num / 60);
    let minutes = num % 60 ? (num % 60 < 10 ? "0" + (num % 60) : num % 60) : 0;

    return hours + ":" + minutes;
  }

  return (
    <div className="App">
      <div className="view1">
        <div className="votesbox">
          <div className="chart" >
            {/* <div>{cookies.get("userEmail")}</div> */}
            <Line data={chartdata} options={options} />
          </div>
          <div className="votescount slider_position bg-info">
            last count: &nbsp;
            {visibledata[visibledata.length - 1]}
          </div>
        </div>
        <div className="introbox">
          <div className="sliderbox">
            <div className="slider" >
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
        </div>
      </div>

      <div className="view2">
        <div className="timer" ref={timerElementRef} />

        <div>
          <button
            className="btn btn-secondary btn-lg mb-3"
            onClick={() => clearInterval(intervalRef.current)}
          >
            Stop
          </button>
          <br />
        </div>
        <div className="guess-input my-1">
          <input
            onChange={(e) => setGuess(e.target.value)}
            placeholder={`please enter your guess ${
              timeRef.current < 119 ? `after ${119 - timeRef.current} sec` : ""
            }`}
            class="form-control"
            type="number"
            disabled={(timeRef.current > 119 ? false : true)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            value="Submit"
            className="btn btn-primary btn-lg"
            type="submit"
            onClick={onSubmit}
            disabled={(timeRef.current > 119 ? false : true)}
          />
        </div>
        <br />
      </div>
      <div
        className="intro"
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        {train ? (
          <h5>trian show </h5>
        ) : (
          <h5>
            در این آزمون, داده های یک رای گیری فرضی 6 دقیقه ای بر روی نمودار
            مشاهده خواهد شد هر 6 ثانیه, مجموع آرای اخذ شده تا آن لحظه بر روی
            نمودار و باکس گوشه بالا سمت راست نمودار نمایش داده خواهد شده از شرکت
            کننده خواسته میشود تا قبل از گذر 4 دقیقه از رای گیری, از داده های
            مشاهده شده مجموع تعداد آرا در 6 دقیقه را تخمین زده و در جعبه سمت راست وارد
            نماید.
          </h5>
        )}
      </div>
    </div>
  );
}

export default Test;
// todolist
// 1.make a timer for 6 miniutes
//2.show 10 datapoints to user every second
//3.user can guess the number of votes
//4.user can guess the number of votes in 6 minutes
