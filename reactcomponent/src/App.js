import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './component/Header';
import About from './component/About';
import Footer from './component/Footer';
import Project from './component/Project';
import Skill from './component/Skill';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='d-flex flex-column min-vh-100'>
          <Header />
          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Project />} />
              <Route path='/skill' element={<Skill />} />
              <Route path='/About' element={<About />} />
              <Route path='*' element={<Project />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
