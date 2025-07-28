import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4 text-center'>List of Users From API</h2>
      <div className='row'>
        {data.map((user) => (
          <div key={user.id} className='col-md-4 mb-4'>
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

                <hr />
                <button
                  className='btn btn-primary mt-2'
                  onClick={() => handleViewProfile(user.id)}
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
