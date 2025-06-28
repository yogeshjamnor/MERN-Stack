import React from 'react';

function Student(props) {
  return (
    <div className='card shadow p-3 border border-secondary'>
      <h4 className='text-success'>{props.name}</h4>
      <hr />
      <p>
        <strong>Age:</strong> {props.age}
      </p>
      <p>
        <strong>Grade:</strong> {props.grade}
      </p>
      <p>
        <strong>School:</strong> {props.school}
      </p>
      <p>
        <strong>Address:</strong> {props.address}
      </p>
      <hr />
      <div className='d-flex justify-content-between'>
        <button className='btn btn-success px-4'>View More</button>
        <button className='btn btn-danger px-4'>Delete </button>
      </div>
    </div>
  );
}

export default Student;
