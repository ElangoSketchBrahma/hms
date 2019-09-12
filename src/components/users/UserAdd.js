import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {addUser} from '../../actions/UsersActions'

const UserAdd = props => {
  const dispatch = useDispatch();
  const formSubmit = e => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      firstname: e.target.firstName.value,
      lastname: e.target.lastName.value,
      email: e.target.email.value
    };
    dispatch(addUser(user));
    // console.log(user);
    props.history.goBack();
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Add New User</h1>
      <form onSubmit={formSubmit}>
        <div className='form-group'>
          <label htmlFor='firstname'>Firstname:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='firstName'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Lastname:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='lastName'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>E-mail:</label>
          <input
            type='email'
            className='form-control form-control-lg'
            required
            name='email'
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          Add User
        </button>
      </form>
    </Fragment>
  );
};

export default UserAdd;
