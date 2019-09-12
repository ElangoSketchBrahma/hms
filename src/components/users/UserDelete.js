import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteUser} from '../../actions/UsersActions';

const UserDelete = props => {
  const dispatch = useDispatch();
  const yes = () => {
    dispatch(deleteUser(parseInt(props.match.params.id)));
    props.history.goBack();
  };
  const no = () => {
    props.history.goBack();
  };
  return (
    <div>
      <h2>Are you sure you want to delete this user ?</h2>
      <button className='btn btn-lg btn-success mr-3 mt-5' onClick={no}>
        No, Keep it
      </button>
      <button className='btn btn-lg btn-danger mt-5' onClick={yes}>
        Yes, Delete
      </button>
    </div>
  );
};

export default UserDelete;
