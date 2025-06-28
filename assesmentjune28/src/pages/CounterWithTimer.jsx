import React, { useState, useEffect, useRef } from 'react';

function CounterWithTimer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the timer when 'running' is true
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    // Cleanup function for stopping the interval
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  // Button handlers
  const startTimer = () => setRunning(true);
  const stopTimer = () => setRunning(false);
  const resetTimer = () => {
    setRunning(false);
    setCount(0);
  };

  return (
    <div className="text-center mt-4">
      <h2>Counter: {count}</h2>
      <button onClick={startTimer} disabled={running} className="btn btn-success m-2">
        Start
      </button>
      <button onClick={stopTimer} disabled={!running} className="btn btn-warning m-2">
        Stop
      </button>
      <button onClick={resetTimer} className="btn btn-danger m-2">
        Reset
      </button>
    </div>
  );
}

export default CounterWithTimer;
