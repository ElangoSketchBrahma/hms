import React from 'react';
import './css/header.css';
import logo from './img/header_icon.png';
import { Link } from 'react-router-dom';
const header = () => {
  return (
    <header className='header'>
      <nav className='navbarr'>
        <div className='header_logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='header_nav'>
          <ul>
            <li>
              <Link to='/admin'>Admin</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
