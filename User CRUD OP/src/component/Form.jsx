import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Form() {
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
    suite: '',
    street: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: '',
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,
      company: {
        name: data.companyName,
        catchPhrase: data.catchPhrase,
        bs: data.bs,
      },
      address: {
        suite: data.suite,
        street: data.street,
        city: data.city,
        zipcode: data.zipcode,
        geo: {
          lat: data.lat,
          lng: data.lng,
        },
      },
    };

    try {
      await axios.post('http://localhost:3000/users', formattedData);
      alert('User added successfully!');
      nav('/');
    } catch (error) {
      console.error('Failed to add user:', error);
      alert('Error adding user');
    }
  };

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h2>Add User</h2>
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
            <label className='form-label'>Username</label>
            <input
              type='text'
              name='username'
              className='form-control'
              value={data.username}
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
            <label className='form-label'>Phone</label>
            <input
              type='text'
              name='phone'
              className='form-control'
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Website</label>
            <input
              type='text'
              name='website'
              className='form-control'
              value={data.website}
              onChange={handleChange}
            />
          </div>

          <h5>Company Info</h5>
          <div className='mb-3'>
            <label className='form-label'>Company Name</label>
            <input
              type='text'
              name='companyName'
              className='form-control'
              value={data.companyName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Catch Phrase</label>
            <input
              type='text'
              name='catchPhrase'
              className='form-control'
              value={data.catchPhrase}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Business (bs)</label>
            <input
              type='text'
              name='bs'
              className='form-control'
              value={data.bs}
              onChange={handleChange}
            />
          </div>

          <h5>Address</h5>
          <div className='mb-3'>
            <label className='form-label'>Suite</label>
            <input
              type='text'
              name='suite'
              className='form-control'
              value={data.suite}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Street</label>
            <input
              type='text'
              name='street'
              className='form-control'
              value={data.street}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>City</label>
            <input
              type='text'
              name='city'
              className='form-control'
              value={data.city}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Zipcode</label>
            <input
              type='text'
              name='zipcode'
              className='form-control'
              value={data.zipcode}
              onChange={handleChange}
            />
          </div>

          <h6>Geo Coordinates</h6>
          <div className='mb-3'>
            <label className='form-label'>Latitude</label>
            <input
              type='text'
              name='lat'
              className='form-control'
              value={data.lat}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Longitude</label>
            <input
              type='text'
              name='lng'
              className='form-control'
              value={data.lng}
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn-success'>
            Add User
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
