import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Topnav() {
  return (
    <nav className='navbar navbar-expand text-light bg-dark px-4 py-2'>
      <div className='container-fluid justify-content-between'>
        <span className='navbar-brand text-white fw-bold'>EnvatoMarket</span>
        <span className='text-white fw-semibold' style={{ cursor: 'pointer' }}>
          <button className='btn btn-success text-light'>Buy now</button>
        </span>
      </div>
    </nav>
  );
}
