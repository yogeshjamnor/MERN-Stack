import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './pages/Navbar';
import Counter from './pages/Counter';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import UseReducer from './pages/UseReducer';
import CounterWithTimer from './pages/CounterWithTimer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/users' element={<Users />} />
        <Route path='/todo' element={<UseReducer />} />
        <Route path='/counter' element={<CounterWithTimer />} />
        <Route path='/users/:id' element={<UserDetails />} />
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
