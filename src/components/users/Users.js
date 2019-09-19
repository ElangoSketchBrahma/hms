import React from 'react';
import './css/users.css'
import { Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';

const Users = () => {
  return (
    <div className='users mt-5'>
      <Route exact path='/admin/users' component={UsersList} />
      <Route exact path='/admin/users/add' component={UserAdd} />
      <Route exact path='/admin/users/edit/:id' component={UserEdit} />
      <Route exact path='/admin/users/delete/:id' component={UserDelete} />
    </div>
  );
};

export default Users;
