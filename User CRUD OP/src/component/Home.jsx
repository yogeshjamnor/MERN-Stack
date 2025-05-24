import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from './Navbar';
import { NavLink } from 'react-router-dom';

function Home() {
  const [emps, setEmps] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchEmployees = () => {
    axios
      .get('http://localhost:3000/users')
      .then((res) => setEmps(res.data))
      .catch((err) => console.error('Error:', err));
  };

  const deleteEmployee = async (id) => {
    if (window.confirm('Delete user?')) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        fetchEmployees();
      } catch (error) {
        console.error('Delete error:', error);
        alert('unable to delete user');
      }
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const result = emps.filter((emp) =>
    emp.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container-fluid'>
      <NavBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className='row m-3'>
        {result.map((emp) => (
          <div className='col-md-4 mb-4' key={emp.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{emp.name}</h5>
                <p className='card-text'>
                  <b>Username:</b> {emp.username} <br />
                  <b>Email:</b> {emp.email} <br />
                  <b>Phone:</b> {emp.phone} <br />
                  <b>Website:</b> {emp.website} <br />
                  <b>Company:</b> {emp.company.name} <br />
                  <b>CatchPhrase:</b> {emp.company.catchPhrase} <br />
                  <b>Business:</b> {emp.company.bs} <br />
                  <b>Address:</b> {emp.address.suite}, {emp.address.street},{' '}
                  {emp.address.city}, {emp.address.zipcode} <br />
                  <b>Geo:</b> Lat: {emp.address.geo.lat}, Lng:{' '}
                  {emp.address.geo.lng}
                </p>
              </div>
              <div className='card-footer d-flex gap-2'>
                <NavLink
                  className='btn btn-primary w-50'
                  to={`/edit/${emp.id}`}
                >
                  Edit
                </NavLink>
                <button
                  className='btn btn-danger w-50'
                  onClick={() => deleteEmployee(emp.id)}
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

export default Home;
