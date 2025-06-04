import React from 'react';

function Student(props) {
  return (
    <div className='card shadow p-3 border border-secondary'>
      <h4 className='text-success'>{props.name}</h4>
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
    </div>
  );
}

export default Student;
