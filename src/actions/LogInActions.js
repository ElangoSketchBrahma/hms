export const loginUser = userId => {
  return {
    type: 'Login User',
    payload: userId
  };
};
