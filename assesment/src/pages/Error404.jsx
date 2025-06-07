import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Error404() {
  return (
    <div className='container text-center'>
      <div className='p-2'>
        <h1 className='text-danger'>
          Sorry you searching page is not Available
          <br /> please Go default page
        </h1>
      </div>
      <div>
        <NavLink
          className='navbar-brand btn btn-primary text-light px-3 py-2'
          to='/'
        >
          home page
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;
