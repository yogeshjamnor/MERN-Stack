import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function LocalProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error('Error loading user:', err);
        alert('Failed to load user');
      });
  }, [id]);

  return (
    <div className='container mt-4'>
      <h3 className='mb-4'>User Profile</h3>
      <div className='card shadow p-3'>
        {user ? (
          <>
            <h5 className='card-title'>{user.name}</h5>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Password:</strong> {user.password}
            </p>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}
