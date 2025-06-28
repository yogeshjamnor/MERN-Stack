import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './pages/Sidenav';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Topnav from './pages/Topnav';
function App() {
  return (
    <>
      <Home />
      {/* <Router>
        <Home />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router> */}
    </>
  );
}
export default App;
