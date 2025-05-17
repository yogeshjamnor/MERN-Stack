import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from '../component/Navbar';
import { NavLink } from 'react-router-dom';

function Home() {
  const [emps, setEmps] = useState([]);

  const fetchEmployees = () => {
    axios
      .get('http://localhost:3000/emps')
      .then((res) => setEmps(res.data))
      .catch((err) => console.error('Error fetching employees:', err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='row m-3'>
        {emps.map((emp) => (
          <div className='col-md-4 mb-4' key={emp.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{emp.fullName}</h5>
                <p className='card-text'>
                  <strong>Email:</strong> {emp.email} <br />
                  <strong>Phone:</strong> {emp.phone} <br />
                  <strong>Role:</strong> {emp.role}
                </p>
              </div>
              <div className='card-footer d-flex gap-2'>
                <NavLink
                  className='btn btn-primary w-50'
                  to={`/edit/${emp.id}`}
                >
                  Edit
                </NavLink>
                <NavLink
                  className='btn btn-danger w-50'
                  to={`/delete/${emp.id}`}
                >
                  Delete
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
