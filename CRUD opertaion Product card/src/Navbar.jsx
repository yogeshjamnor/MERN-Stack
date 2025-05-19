import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-4'>
      <NavLink className='navbar-brand' to='/'>
        <h1 className='h4 m-0'>Task</h1>
      </NavLink>

      <ul className='navbar-nav ms-auto d-flex flex-row gap-3'>
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
          <NavLink className='nav-link' to='/product' activeclassname='active'>
            Product Axios
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/form' activeclassname='active'>
            Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
