import HotelsReducers from './HotelsReducers';
import UsersReducers from './UsersReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  hotels: HotelsReducers,
  users: UsersReducers,
});

export default allReducers;