import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Add from './Add';
import Update from './Update';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />

        <Route
          path='*'
          element={
            <h2 className='text-center mt-5 text-danger'>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
