import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <header className='bg-light py-3'>
      <div className='container-fluid d-flex align-items-center justify-content-between'>
        <NavLink to='/' className='d-flex align-items-center nav-link'>
          <h1 className='text-primary m-0'>Presento</h1>
        </NavLink>

        <nav className='d-none d-md-block'>
          <ul className='nav text-light'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link active'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/services' className='nav-link'>
                Services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/portfolio' className='nav-link'>
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/team' className='nav-link'>
                Team
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/blog' className='nav-link'>
                Blog
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/contact' className='nav-link'>
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='btn btn-danger text-white px-3' to='/get'>
                Get Started
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
