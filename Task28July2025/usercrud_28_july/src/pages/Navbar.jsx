import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <header className='bg-primary  py-1'>
      <div className='container-fluid d-flex align-items-center justify-content-between'>
        <NavLink to='/' className='d-flex align-items-center nav-link'>
          <h1 className='text-light m-0'>User CRUD</h1>
        </NavLink>

        <nav className='d-none d-md-block'>
          <ul className='nav '>
            <li className='nav-item'>
              <NavLink to='/userlist' className='nav-link active text-light'>
                UserList
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/localregister'
                className='nav-link active text-light'
              >
                Register User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
