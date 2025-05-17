import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './component/Navbar';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import DeleteUser from './pages/DeleteUser';
import UpdateUser from './pages/UpdateUser';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id' element={<UpdateUser />} />
          <Route path='/delete/:id' element={<DeleteUser />} />
          {/*fallback routing */}
          <Route path='*' element={'page not found'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
