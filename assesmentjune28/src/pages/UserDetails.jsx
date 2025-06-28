import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div className='container mt-5'>
        <h3>User not found</h3>
        <button
          className='btn btn-secondary mt-3'
          onClick={() => navigate('/users')}
        >
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className='container mt-5'>
      <h2>User Details</h2>
      <div className='card p-4 shadow-sm mt-4'>
        <h4>{user.name}</h4>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <button
          className='btn btn-secondary mt-3'
          onClick={() => navigate('/users')}
        >
          Back to Users
        </button>
      </div>
    </div>
  );
}

export default UserDetail;
