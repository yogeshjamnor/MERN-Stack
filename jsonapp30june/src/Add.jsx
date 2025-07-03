import React, { useState, useEffect } from 'react';

function Add() {
  const [users, setUsers] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: 'User',
  });

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        const maxId = data.reduce(
          (max, user) => (user.id > max ? user.id : max),
          0
        );
        setNextId(maxId + 1);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    const newUser = { id: nextId, ...formData };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((result) => {
        setUsers([...users, result]);
        setNextId(nextId + 1);
        resetForm();
      });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      role: 'User',
    });
  };

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <h2 className='text-center mb-4'>Add New User</h2>
          <form onSubmit={submitData}>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <label className='form-label'>User ID</label>
                <input
                  type='number'
                  className='form-control'
                  value={nextId}
                  disabled
                />
              </li>

              <li className='mb-3'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </li>

              <li className='mb-3'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </li>

              <li className='mb-3'>
                <label className='form-label'>Phone</label>
                <input
                  type='number'
                  name='phone'
                  className='form-control'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </li>

              <li className='mb-3'>
                <label className='form-label'>City</label>
                <input
                  type='text'
                  name='city'
                  className='form-control'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </li>

              <li className='mb-3'>
                <label className='form-label'>Role</label>
                <select
                  name='role'
                  className='form-select'
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value='User'>User</option>
                  <option value='Moderator'>Moderator</option>
                  <option value='Admin'>Admin</option>
                  <option value='Editor'>Editor</option>
                  <option value='Viewer'>Viewer</option>
                  <option value='Manager'>Manager</option>
                </select>
              </li>

              <li className='d-flex justify-content-between'>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={resetForm}
                >
                  Reset
                </button>
              </li>
            </ul>
          </form>

          <hr className='mt-5' />
          <h4 className='text-center'>All Users ({users.length})</h4>
          <ul className='list-group'>
            {users.map((user) => (
              <li key={user.id} className='list-group-item'>
                #{user.id} — {user.name} ({user.role}) — {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Add;
