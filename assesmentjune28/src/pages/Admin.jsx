import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className='container mt-5'>
      <h1>Welcome to the Admin Page</h1>
      <button onClick={handleLogout} className='btn btn-danger mt-3'>
        Logout
      </button>
    </div>
  );
}

export default Admin;
