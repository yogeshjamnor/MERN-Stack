import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

const App2 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch((err) => console.error('Fetch error:', err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (res.ok) {
            setUsers(users.filter((user) => user.id !== id));
          } else {
            alert('Failed to delete user');
          }
        })
        .catch((err) => console.error('Error deleting user:', err));
    }
  };

  const handleView = (user) => {
    setSelectedUser(user);

    const modalElement = document.getElementById('viewModal');
    if (modalElement) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4 text-center'>User Cards (Fetch)</h2>
      <div className='row'>
        {users.map((user) => (
          <div key={user.id} className='col-md-4 mb-4'>
            <div className='card shadow-sm text-center'>
              <div className='card-body'>
                <h5 className='card-title'>{user.name}</h5>
                <hr />
                <p className='card-text'>
                  <strong>ID:</strong> {user.id}
                </p>
                <p className='card-text'>
                  <strong>Email:</strong> {user.email}
                </p>
                <p className='card-text'>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className='card-text'>
                  <strong>City:</strong> {user.city}
                </p>
                <p className='card-text'>
                  <strong>Role:</strong> {user.role}
                </p>
                <hr />
                <button
                  className='btn btn-primary me-2'
                  onClick={() => handleView(user)}
                >
                  View Profile
                </button>
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

      {/* Bootstrap Modal for View */}
      <div
        className='modal fade'
        id='viewModal'
        tabIndex='-1'
        aria-labelledby='viewModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='viewModalLabel'>
                User Details
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              {selectedUser ? (
                <>
                  <p>
                    <strong>ID:</strong> {selectedUser.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedUser.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedUser.phone}
                  </p>
                  <p>
                    <strong>City:</strong> {selectedUser.city}
                  </p>
                  <p>
                    <strong>Role:</strong> {selectedUser.role}
                  </p>
                </>
              ) : (
                <p>Loading user details...</p>
              )}
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App2;
