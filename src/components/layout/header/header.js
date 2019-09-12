import React from 'react';
import './css/header.css';
import logo from './img/header_icon.png';
import { Link } from 'react-router-dom';
const header = props => {
  let admin = false;
  if (window.location.pathname.indexOf('/admin') > -1) {
    admin = true;
    console.log('worked');
  }
  console.log('not worked');
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
                <Link to='/admin/hotels'>Hotels</Link>
              </li>
              <li>
                <Link to='/admin/rooms'>Rooms</Link>
              </li>
              <li>
                <Link to='/admin/users'>Users</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a href='/admin'>Admin</a>
              </li>
              <li>
                <a href='/user'>User</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default header;
