import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bookRoom } from '../../actions/BookingActions';

const BookRoom = props => {
  const loggedInUser = useSelector(state => state.login);
  const dispatch = useDispatch();
  const authenticationFailed = Object.keys(loggedInUser).length === 0;

  if (authenticationFailed) {
    return <Redirect to='/login' />;
  }
  const formSubmit = e => {
    e.preventDefault();
    const bookRoomData = {
      id: Date.now(),
      startDate: e.target.start.value,
      endDate: e.target.end.value,
      hotelId: parseInt(e.target.hotelId.value),
      roomNo: parseInt(e.target.roomNo.value),
      bookedByUserName: loggedInUser.firstname,
      bookedByUserId: loggedInUser.id,
      bookedByUserEmail: loggedInUser.email
    };
    dispatch(bookRoom(bookRoomData));
    return <Redirect to='/' />;
    
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Book this room</h1>
      <form onSubmit={formSubmit}>
        <div className='form-group'>
          <label htmlFor='start'>Start date:</label>
          <input type='date' name='start' className='form-control'></input>
        </div>
        <div className='form-group'>
          <label htmlFor='end'>End date:</label>
          <input type='date' name='end' className='form-control'></input>
        </div>
        <input
          type='hidden'
          name='hotelId'
          value={props.match.params.hotelId}
        />
        <input
          type='hidden'
          name='roomNo'
          value={props.match.params.roomNo}
        />
        <button type='submit' className='btn btn-success'>
          Book This Room
        </button>
      </form>
    </Fragment>
  );
};

export default BookRoom;
