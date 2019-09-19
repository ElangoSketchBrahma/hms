import HotelsReducers from './HotelsReducers';
import UsersReducers from './UsersReducers';
import LoginReducers from './LoginReducers';
import BookingReducers from './BookingReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  hotels: HotelsReducers,
  users: UsersReducers,
  login: LoginReducers,
  bookings: BookingReducers
});

export default allReducers;
