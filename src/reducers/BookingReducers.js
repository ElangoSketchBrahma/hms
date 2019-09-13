const BookingReducers = (
  state = JSON.parse(localStorage.getItem('bookings') || '[]'),
  action
) => {
  const bookings = state;
  switch (action.type) {
    case 'Book Room':
      bookings.push(action.payload);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      return bookings;
    default:
      return state;
  }
};
export default BookingReducers;
