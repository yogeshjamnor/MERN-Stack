import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Header() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-4'>
        <NavLink className='navbar-brand' to='/'>
          <h1 className='h4 m-0'>Assessment Task</h1>
        </NavLink>

        <ul className='navbar-nav ms-auto d-flex flex-row gap-3'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/' end>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/skill'>
              Skills
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
