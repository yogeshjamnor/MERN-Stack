import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Footer() {
  return (
    <footer className='bg-primary text-white text-center p-3 mb-0 d-fix'>
      <div className='container'>
        <p className='mb-0'>
          &copy; {new Date().getFullYear()} Yogesh Jamnor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
