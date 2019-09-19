import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../actions/LogInActions';

const Login = (props) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const formSubmit = e => {
    e.preventDefault();
    const userId = parseInt(e.target.userId.value);
    if (users.length > 0) {
      dispatch(loginUser(userId));
      props.history.goBack();
    // console.log(userId);
    }
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Login</h1>
      <form onSubmit={formSubmit}>
        <div className='form-group'>
          <label htmlFor='Hotel'>Select username</label>
          <select className='form-control' name='userId' required>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
        </div>
        <button type='submit' className='btn btn-success'>
          Login
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
