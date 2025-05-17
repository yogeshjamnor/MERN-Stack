import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/emps/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => {
        console.error('Error fetching employee data:', err);
        alert('Failed to fetch employee');
        navigate('/');
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/emps/${id}`, formData);
      alert('Employee updated successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error updating employee:', err);
      alert('Failed to update employee');
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
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
        <button type='submit' className='btn btn-primary'>
          Update User
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
