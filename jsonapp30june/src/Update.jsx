import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Update() {
  const { id } = useParams(); // Moved inside the component
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: 'User',
  });

  useEffect(() => {
    // Fetch user by ID
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((user) => {
        setFormData({
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
          city: user.city || '',
          role: user.role || 'User',
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(id), ...formData }),
    })
      .then((res) => res.json())
      .then(() => {
        alert('User updated successfully!');
        navigate('/'); // Redirect after update
      })
      .catch((err) => console.error('Update error:', err));
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
          <h2 className='text-center mb-4'>Update User #{id}</h2>
          <form onSubmit={submitData}>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <label className='form-label'>User ID</label>
                <input
                  type='number'
                  className='form-control'
                  value={id}
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
                  Update
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
        </div>
      </div>
    </div>
  );
}
