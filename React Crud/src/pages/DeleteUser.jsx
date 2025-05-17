import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this employee?'
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/emps/${id}`)
        .then(() => {
          alert('Employee deleted successfully');
          navigate('/');
        })
        .catch((err) => {
          console.error('Error deleting employee:', err);
          alert('Failed to delete employee');
          navigate('/');
        });
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  return null;
}

export default DeleteUser;
