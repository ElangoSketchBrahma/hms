import React, { Fragment } from 'react';
import Hotels from '../hotels/Hotels';
import Rooms from '../rooms/Rooms';
import Users from '../users/Users';
import {Route} from 'react-router-dom';

const Admin = () => {
  return (
    <Fragment>
      <Route path='/admin/hotels' component={Hotels} />
      <Route path='/admin/rooms' component={Rooms} />
      <Route path='/admin/users' component={Users} />
    </Fragment>
  );
};

export default Admin;
