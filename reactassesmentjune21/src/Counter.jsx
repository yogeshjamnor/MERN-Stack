import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>UseState Counter</h1>
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
    </>
  );
}

export default Counter;
