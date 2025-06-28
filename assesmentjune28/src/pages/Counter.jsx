import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Counter() {
  const [count, setCount] = useState(0);
  const [at, setAt] = useState(false);
  const Auto = () => {
    setCount(count + 1);
  };
  if (at) {
    setInterval(Auto, [1000]);
  }

  return (
    <>
      <h1>Counter Component</h1>
      <h2>Count: {count}</h2>
      <button
        className='btn bg-primary text-light m-2'
        onClick={() => setCount(count + 1)}
      >
        add
      </button>
      <button
        className='btn bg-primary text-light m-2'
        onClick={() => setCount(count - 1)}
      >
        reduce
      </button>
      <button
        className='btn bg-primary text-light m-2'
        onClick={() => {
          setCount(0);
          setAt(false);
        }}
      >
        reset
      </button>
      <button
        className='btn bg-primary text-light m-2'
        onClick={() => {
          Auto();
          setAt(true);
        }}
      >
        Auto Start
      </button>
    </>
  );
}

export default Counter;
