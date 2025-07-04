import React, { useState } from 'react';
import axios from 'axios';

function Add() {
  const [data, setData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    city: '',
    role: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Saveform = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/users', data)
      .then(() => {
        alert('Data added successfully');

        // Clear the form
        setData({
          id: '',
          name: '',
          email: '',
          phone: '',
          city: '',
          role: '',
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
            <label className='form-label'>Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={data.name}
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
            <label className='form-label'>Phone</label>
            <input
              type='number'
              name='phone'
              className='form-control'
              value={data.phone}
              onChange={handleChange}
            />
          </li>
          <li className='mb-3'>
            <label className='form-label'>City</label>
            <input
              type='text'
              name='city'
              className='form-control'
              value={data.city}
              onChange={handleChange}
            />
          </li>
          <li className='mb-3'>
            <label className='form-label'>Role</label>
            <select
              name='role'
              className='form-select'
              value={data.role}
              onChange={handleChange}
            >
              <option value=''>-- Select Role --</option>
              <option value='User'>User</option>
              <option value='Admin'>Admin</option>
              <option value='Editor'>Editor</option>
              <option value='Moderator'>Moderator</option>
              <option value='Viewer'>Viewer</option>
              <option value='Manager'>Manager</option>
            </select>
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
                  name: '',
                  email: '',
                  phone: '',
                  city: '',
                  role: '',
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
