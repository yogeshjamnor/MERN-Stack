import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/emps', formData);
      alert('Employee added successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error adding employee:', err);
      alert('Failed to add employee');
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Full Name</label>
          <input
            type='text'
            name='fullName'
            className='form-control'
            value={formData.fullName}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Phone</label>
          <input
            type='text'
            name='phone'
            className='form-control'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Role</label>
          <input
            type='text'
            name='role'
            className='form-control'
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
