import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/data');
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:3000/data/${id}`);
        setData(data.filter((user) => user.id !== id));
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4 text-center'>User Cards (Fetch)</h2>
      <div className='row'>
        {data.map((user) => (
          <div key={user.id} className='col-md-4 mb-4'>
            <div className='card shadow-sm text-center'>
              <div className='card-body'>
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <hr />
                <h5 className='card-title'>
                  {`${user.first_name} `}
                  {user.last_name}
                </h5>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <hr />
                <img
                  src={`${user.avatar}`}
                  alt=''
                  style={{ height: '120px', width: '150px' }}
                />

                <hr />
                <button
                  className='btn btn-warning me-2'
                  onClick={() => handleUpdate(user.id)}
                >
                  Update
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
