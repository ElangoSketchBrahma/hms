const LoginReducers = (state = {}, action) => {
  switch (action.type) {
    case 'Login User':
      const users = JSON.parse(localStorage.getItem('users'));
      console.log(users, action.payload);
      const selectedUser = users.filter(user => user.id === action.payload);
      console.log(selectedUser[0]);
      return selectedUser[0];
    default:
      return state;
  }
};

export default LoginReducers;
