import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LocalRegister() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const id = Date.now(); // ✅ Use timestamp as manual ID

    const formattedData = {
      id: id,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      await axios.post('http://localhost:3000/users', formattedData);
      alert('User registered successfully!');
      nav(`/localprofile/${data.name}`); // ✅ corrected from `name` to `data.name`
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Full Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            minLength={6}
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            className='form-control'
            minLength={6}
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Register
        </button>
      </form>
    </div>
  );
}
