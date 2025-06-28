import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Error404 from './pages/Error404';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseContext from './pages/UseContext';
import AllHooks from './pages/AllHooks';
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Existing routes */}
        <Route path='/' element={<Home />} />
        <Route path='/usest' element={<UseState />} />
        <Route path='/usef' element={<UseEffect />} />
        <Route path='/allhooks' element={<AllHooks />} />
        <Route path='/useContext' element={<UseContext />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
