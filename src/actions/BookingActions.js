export const bookRoom = bookingData => {
  return {
    type: 'Book Room',
    payload: bookingData
  };
};
