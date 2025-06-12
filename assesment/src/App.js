import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Sidebar from './component/Sidebar';
import Topbar from './component/Topbar';
import Error404 from './pages/Error404';

import Home from './pages/Home';
import About from './pages/About';
import Overview from './pages/Overview';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Company from './pages/Company';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Timesheet from './pages/Timesheet';
import Leaders from './pages/Leaders';

function App() {
  return (
    <Router>
      <div className='d-flex'>
        <Sidebar />
        <div className='flex-grow-1' style={{ marginLeft: '300px' }}>
          <Topbar />
          <div
            className='p-4 bg-light'
            style={{ minHeight: 'calc(100vh - 56px)', marginTop: '56px' }}
          >
            <Routes>
              {/* Existing routes */}
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />

              {/* Sidebar Routes */}
              <Route path='/overview' element={<Overview />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/settings' element={<Settings />} />

              <Route path='/about/company' element={<Company />} />
              <Route path='/about/team' element={<Team />} />
              <Route path='/about/contact' element={<Contact />} />

              <Route path='/projects' element={<Projects />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/timesheet' element={<Timesheet />} />
              <Route path='/leaders' element={<Leaders />} />

              <Route path='*' element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
