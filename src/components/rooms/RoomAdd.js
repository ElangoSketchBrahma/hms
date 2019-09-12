import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRoom } from '../../actions/HotelsActions';

const RoomAdd = props => {
  const [errors, setErrors] = useState([]);
  const hotels = useSelector(state => state.hotels);
  const dispatch = useDispatch();
  const formSubmit = e => {
    e.preventDefault();
    const hotelId = parseInt(e.target.hotelId.value);
    const room = {
      roomNo: parseInt(e.target.roomNo.value),
      beds: parseInt(e.target.beds.value),
      desc: e.target.desc.value
    };
    const selectedHotel = hotels.filter(hotel => hotel.id === hotelId);
    const sameRoomNo = selectedHotel[0].rooms.some(
      room => room.roomNo === parseInt(e.target.roomNo.value)
    );
    console.log(sameRoomNo);
    // const sameRoomNo = true;
    if (sameRoomNo) {
      setErrors(['same room no is added']);
    } else {
      dispatch(addRoom(room, hotelId));
      setErrors([]);
      props.history.goBack();
    }
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Add Room</h1>
      <form onSubmit={formSubmit}>
        {errors.length > 0 ? <h5 className='text-danger'>{errors[0]}</h5> : ''}
        <div className='form-group'>
          <label htmlFor='Hotel'>Select Hotel</label>
          <select
            className='form-control form-control-lg'
            name='hotelId'
            required
          >
            {hotels.map(hotel => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='roomNo'>Room No:</label>
          <input
            type='number'
            name='roomNo'
            id='roomNo'
            className='form-control form-control-lg'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='beds'>No of Beds:</label>
          <input
            type='number'
            name='beds'
            id='beds'
            className='form-control form-control-lg'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='desc'>Description:</label>
          <textarea
            className='form-control form-control-lg'
            id='desc'
            rows='8'
            name='desc'
          ></textarea>
        </div>
        <button className='btn btn-success btn-lg mt-5' type='submit'>
          Add Room
        </button>
      </form>
    </Fragment>
  );
};

export default RoomAdd;
