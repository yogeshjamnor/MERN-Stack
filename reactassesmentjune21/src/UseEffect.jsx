import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function UseEffect() {
  const [test, setTest] = useState('Yogesh');
  useEffect(() => {
    alert(`hello ${test}, Component mounted`);
  }, [test]);

  return (
    <>
      <h1>UseEffect Component</h1>
      <h2>{test}</h2>
      <button
        className='btn bg-primary text-light m-2'
        onClick={() => setTest('Ritesh')}
      >
        Chnage State
      </button>
    </>
  );
}

export default UseEffect;
