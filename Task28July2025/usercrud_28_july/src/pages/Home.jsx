import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='container mt-5'>
      <div className='bg-white shadow rounded p-5 text-center'>
        <h1 className='mb-4 text-primary'>👋 Welcome!</h1>
        <p className='lead'>We're glad to have you here.</p>
        <hr />
        <p>Explore the dashboard using the menu or navigation bar.</p>
      </div>
    </div>
  );
}
