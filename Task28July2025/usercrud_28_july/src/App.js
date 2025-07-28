import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Profile from './component/Profile';
import UserList from './component/UserList';
import LocalRegister from './pages/LocalRegister';
import LocalProfile from './pages/LocalProfile';
import Error404 from './pages/Error404';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Axios Data  */}
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/userlist' element={<UserList />} />

        {/* Local data Opertaion */}
        <Route path='/localprofile/:id' element={<LocalProfile />} />
        <Route path='/localregister' element={<LocalRegister />} />

        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
