import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Error404 from './pages/Error404';
import About from './pages/About';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />

          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
