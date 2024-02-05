import React, { useRef, useState } from "react";
import ResultDialog from "./ResultDialog";

const TimeChallenger = ({ title, time }) => {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  // const timer = useRef();

  // const dialogRef = useRef();

  // const handleStart = () => {
  //   timer.current = setTimeout(() => {
  //     setTimerExpired(true);
  //     dialogRef.current.showModal();
  //   }, 1000 * time);
  //   console.log("started");
  //   setTimerStarted(true);
  // };

  // const handleStop = () => {
  //   clearTimeout(timer.current);
  // };

  // using another approach
  const timer = useRef();

  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(time * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < time * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.showModal();

    //  using useImpretivehandle
    // dialogRef.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleReset = () => {
    setTimeRemaining(time * 1000);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialogRef.current.showModal();
  };

  return (
    <>
      <ResultDialog
        ref={dialogRef}
        remainingTime={timeRemaining}
        time={time}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "stop" : "start"} Challenge
          </button>
        </p>

        <p className={timeIsActive ? "active" : ""}>
          {timeIsActive ? "time is running" : "timer is inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenger;
