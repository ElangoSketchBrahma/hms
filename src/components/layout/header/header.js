import React from 'react';
import './css/header.css';
import logo from './img/header_icon.png';
import { Link } from 'react-router-dom';
const header = props => {
  let admin = false;
  if (window.location.pathname.indexOf('/admin') > -1) {
    admin = true;
  }
  return (
    <header className='header'>
      <nav className='navbarr'>
        <div className='header_logo'>
          <img src={logo} alt='' />
        </div>
        <div className='header_nav'>
          {admin ? (
            <ul>
              <li>
                <Link to='/admin/hotels'>Hotel</Link>
              </li>
              <li>
                <Link to='/admin/rooms'>Room</Link>
              </li>
              <li>
                <Link to='/admin/users'>User</Link>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </nav>
    </header>
  );
};

export default header;
