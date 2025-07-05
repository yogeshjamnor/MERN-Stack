import React, { useState } from 'react';
import axios from 'axios';

function Add() {
  const [data, setData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Saveform = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/data', data)
      .then(() => {
        alert('Data added successfully');
        setData({
          id: '',
          first_name: '',
          last_name: '',
          email: '',
          avatar: '',
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container-fluid mx-2 my-2'>
      <form onSubmit={Saveform}>
        <ul className='list-unstyled'>
          <li className='mb-3'>
            <label className='form-label'>ID</label>
            <input
              type='number'
              name='id'
              className='form-control'
              value={data.id}
              onChange={handleChange}
            />
          </li>
          <li className='mb-3'>
            <label className='form-label'>First Name</label>
            <input
              type='text'
              name='first_name'
              className='form-control'
              value={data.first_name}
              onChange={handleChange}
            />
          </li>
          <li className='mb-3'>
            <label className='form-label'>Last Name</label>
            <input
              type='text'
              name='last_name'
              className='form-control'
              value={data.last_name}
              onChange={handleChange}
            />
          </li>
          <li className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              className='form-control'
              value={data.email}
              onChange={handleChange}
            />
          </li>
          <li className='mb-3'>
            <label className='form-label'>Avatar</label>
            <input
              type='text'
              name='avatar'
              className='form-control'
              value={data.avatar}
              onChange={handleChange}
            />
          </li>
          <li className='d-flex justify-content-between'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            <button
              type='reset'
              className='btn btn-secondary'
              onClick={() =>
                setData({
                  id: '',
                  first_name: '',
                  last_name: '',
                  email: '',
                  avatar: '',
                })
              }
            >
              Reset
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Add;
