import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        alert('User not found');
      });
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/users/${id}`, data)
      .then(() => alert('User updated successfully'))
      .catch((err) => console.error(err));
  };

  return (
    <div className='container-fluid mx-2 my-2'>
      <form onSubmit={handleSubmit}>
        <ul className='list-unstyled'>
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
              Update
            </button>
            <button
              type='reset'
              className='btn btn-secondary'
              onClick={() => nav('/')}
            >
              home
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Update;
