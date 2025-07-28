import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error('Error loading user:', err);
        alert('Failed to load user');
      });
  }, [id]);

  return (
    <div
      className='container-fluid mt-3 '
      style={{ height: '100vh', width: '33vw' }}
    >
      {user ? (
        <div className='row'>
          <h3 className='mb-5 text-center'>User Profile</h3>
          <div className='col-md-6 offset-md-3'>
            <div className='card shadow-sm text-center'>
              <div className='card-body'>
                <h5 className='card-title'>{user.name}</h5>
                <hr />
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Website:</strong> {user.website}
                </p>

                <hr />
                <h6>Address</h6>
                <p>
                  {user.address.street}, {user.address.suite},<br />
                  {user.address.city}, {user.address.zipcode}
                </p>
                <p>
                  <strong>Geo:</strong> Lat {user.address.geo.lat}, Lng{' '}
                  {user.address.geo.lng}
                </p>

                <hr />
                <h6>Company</h6>
                <p>
                  <strong>Name:</strong> {user.company.name}
                </p>
                <p>
                  <strong>Catch Phrase:</strong> {user.company.catchPhrase}
                </p>
                <p>
                  <strong>Business:</strong> {user.company.bs}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
