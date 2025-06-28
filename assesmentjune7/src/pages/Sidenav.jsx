import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Sidenav() {
  return (
    <div
      className='d-flex flex-column p-3 text-white mt-5'
      style={{
        height: '50vh',
        width: '240px',
        borderRadius: '30px',
        marginLeft: '30px',
        background: '#2f0567',
        left: '0',
      }}
    >
      <h4 className='text-center mb-4'>EnvatoMarket</h4>

      <ul className='nav nav-pills flex-column mb-auto'>
        <li>
          <Link to='/add' className='nav-link text-white'>
            <i className='bi bi-house me-2'></i> Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
