import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar({ searchQuery, onSearchChange }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-4'>
      <NavLink className='navbar-brand' to='/'>
        <h1 className='h4 m-0'>Task</h1>
      </NavLink>

      <ul className='navbar-nav ms-auto d-flex gap-3'>
        <li className='nav-item'>
          <div class='input-group rounded'>
            <input
              type='search'
              className='form-control rounded'
              placeholder='Search by username'
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            exact='true'
            to='/'
            activeclassname='active'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/add' activeclassname='active'>
            Add Data
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
