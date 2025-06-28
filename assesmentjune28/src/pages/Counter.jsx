import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const initialState = {
  count: 0,
  auto: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { count: 0, auto: false };
    case 'AUTO_ON':
      return { ...state, auto: true };
    case 'AUTO_OFF':
      return { ...state, auto: false };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    const tick = () => {
      dispatch({ type: 'INCREMENT' });
      timer = setTimeout(tick, 1000);
    };

    if (state.auto) tick();
    return () => clearTimeout(timer);
  }, [state.auto]);

  return (
    <>
      <h1>Counter Component</h1>
      <h2>Count: {state.count}</h2>

      <button
        className='btn bg-primary text-light m-2'
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Add
      </button>

      <button
        className='btn bg-primary text-light m-2'
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Reduce
      </button>

      <button
        className='btn bg-primary text-light m-2'
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </button>

      <button
        className='btn bg-primary text-light m-2'
        onClick={() => dispatch({ type: 'AUTO_ON' })}
        disabled={state.auto}
      >
        Auto Start
      </button>

      <button
        className='btn btn-danger text-light m-2'
        onClick={() => dispatch({ type: 'AUTO_OFF' })}
        disabled={!state.auto}
      >
        Stop Auto
      </button>
    </>
  );
}

export default Counter;
