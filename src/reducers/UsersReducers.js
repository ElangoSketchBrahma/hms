const UsersReducers = (
  state = JSON.parse(localStorage.getItem('users') || '[]'),
  action
) => {
  switch (action.type) {
    case 'Add User':
      const userDatasAdd = state;
      userDatasAdd.push(action.payload);
      console.log(userDatasAdd);
      localStorage.setItem('users', JSON.stringify(userDatasAdd));
      return userDatasAdd;
    case 'Update User':
      const userDatasEdit = state;
      userDatasEdit.forEach((hotel, index) => {
        if (hotel.id === parseInt(action.payload.id)) {
          userDatasEdit[index] = action.payload;
        }
      });
      localStorage.setItem('users', JSON.stringify(userDatasEdit));
      return userDatasEdit;
    case 'Delete User':
      const userDatasDelete = state;
      const index = userDatasDelete.findIndex(x => x.id === action.payload);
      if (index > -1) {
        userDatasDelete.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(userDatasDelete));
        return userDatasDelete;
      }
      return userDatasDelete;

    default:
      return state;
  }
};

export default UsersReducers;
