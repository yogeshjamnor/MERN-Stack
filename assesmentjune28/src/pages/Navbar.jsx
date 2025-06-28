import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <header className='bg-light py-3'>
      <div className='container-fluid d-flex align-items-center justify-content-between'>
        <NavLink to='/' className='d-flex align-items-center nav-link'>
          <h1 className='text-primary m-0'>Task</h1>
        </NavLink>

        <nav className='d-none d-md-block'>
          <ul className='nav text-light'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link active'>
                Counter
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin' className='nav-link'>
                Admin
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/users' className='nav-link'>
                User
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/todo' className='nav-link'>
                To Do List
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
