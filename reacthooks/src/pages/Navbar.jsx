import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <header className='bg-dark py-3'>
      <div className='container-fluid d-flex align-items-center justify-content-between'>
        <NavLink to='/' className='nav-link'>
          <h1 className='text-primary m-0'>React Hooks</h1>
        </NavLink>

        <nav className='d-flex align-items-center text-light gap-3'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>

          <select
            onChange={handleChange}
            className='form-select bg-dark text-white w-auto'
          >
            <option value=''>-- React Hooks --</option>
            <option value='/usest'>useState</option>
            <option value='/usef'>useEffect</option>
            <option value='/useContext'>useContext</option>
            <option value='/useRef'>useRef</option>
            <option value='/useMemo'>useMemo</option>
            <option value='/useCallback'>useCallback</option>
            <option value='/useReducer'>useReducer</option>
            <option value='/useLayoutEffect'>useLayoutEffect</option>
            <option value='/useImperativeHandle'>useImperativeHandle</option>
            <option value='/useDebugValue'>useDebugValue</option>
            <option value='/useNavigateHook'>useNavigate</option>
            <option value='/useParams'>useParams</option>
            <option value='/useLocation'>useLocation</option>
            <option value='/allhooks'>All Hooks</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
