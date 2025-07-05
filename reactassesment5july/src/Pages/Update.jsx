import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/${id}`)
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
      .put(`http://localhost:3000/data/${id}`, data)
      .then(() => alert('User updated successfully'))
      .catch((err) => console.error(err));
  };

  return (
    <div className='container-fluid mx-2 my-2'>
      <form onSubmit={handleSubmit}>
        <ul className='list-unstyled'>
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
