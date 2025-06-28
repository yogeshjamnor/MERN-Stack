import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {
  const users = [
    {
      id: 1,
      name: 'Yogesh Jamnor',
      email: 'yogesh@example.com',
      phone: '9876543210',
    },
    {
      id: 2,
      name: 'Amit Sharma',
      email: 'amit@example.com',
      phone: '9123456789',
    },
    {
      id: 3,
      name: 'Priya Patel',
      email: 'priya@example.com',
      phone: '9988776655',
    },
    {
      id: 4,
      name: 'Rahul Mehta',
      email: 'rahul@example.com',
      phone: '9012345678',
    },
    {
      id: 5,
      name: 'Sneha Kapoor',
      email: 'sneha@example.com',
      phone: '9090909090',
    },
    {
      id: 6,
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      phone: '8800223344',
    },
    {
      id: 7,
      name: 'Neha Jain',
      email: 'neha@example.com',
      phone: '7776665554',
    },
    {
      id: 8,
      name: 'Vikram Singh',
      email: 'vikram@example.com',
      phone: '9900112233',
    },
    {
      id: 9,
      name: 'Anjali Verma',
      email: 'anjali@example.com',
      phone: '9988007766',
    },
    {
      id: 10,
      name: 'Deepak Yadav',
      email: 'deepak@example.com',
      phone: '9871234567',
    },
  ];

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Users</h2>
      <div className='row'>
        {users.map((user) => (
          <div key={user.id} className='col-md-4 mb-3'>
            <Link
              to={`/users/${user.id}`}
              className='text-decoration-none text-dark'
            >
              <div className='card h-100 shadow-sm'>
                <div className='card-body'>
                  <h5 className='card-title'>{user.name}</h5>
                  <p className='card-text'>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className='card-text'>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
