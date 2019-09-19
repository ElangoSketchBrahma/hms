export const addUser = user => {
  return {
    type: 'Add User',
    payload: user
  };
};
export const updateUser = user => {
  return {
    type: 'Update User',
    payload: user
  };
};

export const deleteUser = userId => {
  return {
    type: 'Delete User',
    payload: userId
  };
};
