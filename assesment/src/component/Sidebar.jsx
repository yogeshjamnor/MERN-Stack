import React from 'react';
import { NavLink } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Sidebar() {
  return (
    <div
      className='text-white position-fixed'
      style={{
        width: '240px',
        marginTop: '80px',
        marginLeft: '20px',
        height: '80%',
        borderRadius: '25px',
        background: '#4C3575',
        paddingTop: '30px',
      }}
    >
      <div className='d-flex flex-column p-3 h-100'>
        <h4 className='text-center mb-4'>
          <i className='bi bi-clipboard-check'></i> My Task
        </h4>
        <ul className='nav nav-pills flex-column'>
          {/* Home Dropdown */}
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle text-white'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='bi bi-house me-2'></i> Home
            </a>
            <ul className='dropdown-menu'>
              <li>
                <NavLink to='/overview' className='dropdown-item'>
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to='/profile' className='dropdown-item'>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to='/settings' className='dropdown-item'>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='dropdown-item'>
                  Home
                </NavLink>
              </li>
            </ul>
          </li>

          {/* About Dropdown */}
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle text-white'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='bi bi-calendar-check me-2'></i> About
            </a>
            <ul className='dropdown-menu'>
              <li>
                <NavLink to='/about/company' className='dropdown-item'>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to='/about/team' className='dropdown-item'>
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink to='/about/contact' className='dropdown-item'>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' className='dropdown-item'>
                  About
                </NavLink>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <NavLink to='/projects' className='nav-link text-white'>
              <i className='bi bi-kanban me-2'></i> Projects
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/tasks' className='nav-link text-white'>
              <i className='bi bi-list-task me-2'></i> Tasks
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/timesheet' className='nav-link text-white'>
              <i className='bi bi-clock-history me-2'></i> Timesheet
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/leaders' className='nav-link text-white'>
              <i className='bi bi-person-lines-fill me-2'></i> Leaders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
