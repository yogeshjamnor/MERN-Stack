import React from 'react';

export default function Topbar() {
  return (
    <nav className='navbar navbar-expand navbar-light bg-dark px-4 py-2 fixed-top'>
      <div className='container-fluid justify-content-between'>
        <span className='navbar-brand text-white fw-bold'>
          <img
            src='/img/logo.svg'
            className='img'
            style={{
              width: '160px',
              height: '100%',
            }}
          />
        </span>
        <span className='text-white fw-semibold' style={{ cursor: 'pointer' }}>
          <button className='btn btn-success text-light'>Buy now</button>
        </span>
      </div>
    </nav>
  );
}
