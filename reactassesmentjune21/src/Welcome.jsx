import React from 'react';

function Main({ name, age, loc }) {
  return (
    <div className='container my-4'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Name: {name}</h5>
          <p className='card-text'>Age: {age}</p>
          <p className='card-text fw-bold text-primary'>Location: {loc}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
