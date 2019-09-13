import React, { Fragment } from 'react';
import Hotels from '../hotels/Hotels';
import Rooms from '../rooms/Rooms';
import Users from '../users/Users';
import { Route, Link } from 'react-router-dom';

const Admin = props => {
  return (
    <Fragment>
      <Link to='/' className='btn btn-outline-dark mt-5 mr-5'>
        {' '}
        Go back
      </Link>
      <Link to='/admin/hotels' className='btn btn-dark mt-5 mr-5'>
        Hotels
      </Link>
      <Link to='/admin/rooms' className='btn btn-dark mt-5 mr-5'>
        Rooms
      </Link>
      <Link to='/admin/users' className='btn btn-dark mt-5 mr-5'>
        Users
      </Link>
      <Fragment>
        <Route path='/admin/hotels' component={Hotels} />
        <Route path='/admin/rooms' component={Rooms} />
        <Route path='/admin/users' component={Users} />
      </Fragment>
    </Fragment>
  );
};

export default Admin;
