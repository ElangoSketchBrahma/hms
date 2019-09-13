import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UsersList = () => {
  const users = useSelector(state => state.users);

  return (
    <Fragment>
      <h1 className='text-center display-4'>Users List</h1>
      <Link
        to='/admin/users/add'
        className='btn btn-primary float-right mb-3'
      >
        Add user
      </Link>
      {users.length > 0 ? (
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>S.no</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>email</th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/admin/users/edit/${user.id}`}
                    className='btn btn-success'
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin/users/delete/${user.id}`}
                    className='btn btn-danger'
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='mt-5 pt-5 text-center text-danger'>No users to Show</h2>
      )}
    </Fragment>
  );
};

export default UsersList;
