import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateUser } from '../../actions/UsersActions';

const UserEdit = props => {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  const user = users.filter(
    item => item.id === parseInt(props.match.params.id)
  );
  const [firstName, setFirstName] = useState(user[0].firstname);
  const [lastName, setLastName] = useState(user[0].lastname);
  const [email, setEmail] = useState(user[0].email);
  const changeFirstName = e => {
    setFirstName(e.target.value);
  };
  const changeLastName = e => {
    setLastName(e.target.value);
  };
  const changeEmail = e => {
    setEmail(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    const user = {
      id: parseInt(e.target.Uid.value),
      firstname: e.target.firstName.value,
      lastname: e.target.lastName.value,
      email: e.target.email.value
    };
    dispatch(updateUser(user));
    props.history.goBack();
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Edit User</h1>
      <form onSubmit={formSubmit}>
        <input type='hidden' name='Uid' value={user[0].id} />
        <div className='form-group'>
          <label htmlFor='name'>Firstname:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='firstName'
            value={firstName}
            onChange={changeFirstName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Lastname:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='lastName'
            value={lastName}
            onChange={changeLastName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='email'
            value={email}
            onChange={changeEmail}
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          Update User
        </button>
      </form>
    </Fragment>
  );
};

export default UserEdit;
