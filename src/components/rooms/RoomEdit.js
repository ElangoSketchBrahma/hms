import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editRoom } from '../../actions/HotelsActions';

const RoomEdit = props => {
  const hotels = useSelector(state => state.hotels);
  const dispatch = useDispatch();
  const selectedHotel = hotels.filter(
    hotel => hotel.id === parseInt(props.match.params.hotelId)
  );
  const selectedRoom = selectedHotel[0].rooms.filter(
    room => room.roomNo === parseInt(props.match.params.roomNo)
  );
  console.log(props);
  if (selectedRoom.length === 0) {
    window.location.href = '/admin/rooms';
  }

  const [roomNo, setRoomNo] = useState(selectedRoom[0].roomNo);
  const [beds, setBeds] = useState(selectedRoom[0].beds);
  const [desc, setDesc] = useState(selectedRoom[0].desc);
  const [errors, setErrors] = useState([]);

  const changeRoomNo = e => {
    setRoomNo(parseInt(e.target.value));
  };
  const changeBeds = e => {
    setBeds(parseInt(e.target.value));
  };
  const changeDesc = e => {
    setDesc(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    const hotelId = parseInt(selectedHotel[0].id);
    const sameRoomNo = selectedHotel[0].rooms.some(
      room => room.roomNo === roomNo
    );
    if (sameRoomNo) {
      setErrors(['same room no is added']);
    } else {
      const room = {
        roomNo,
        beds,
        desc
      };
      dispatch(editRoom(room, hotelId, selectedRoom[0].roomNo));
      console.log('coming here');
      setErrors([]);
      props.history.goBack();
      // console.log(room,hotelId);
    }
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Edit Room</h1>
      <form onSubmit={formSubmit}>
        {errors.length > 0 ? <h5 className='text-danger'>{errors[0]}</h5> : ''}
        <div className='form-group'>
          <label htmlFor='Hotel'>Select Hotel</label>
          <select
            className='form-control form-control-lg'
            name='hotelId'
            required
          >
            {selectedHotel.map(hotel => (
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
            value={roomNo}
            onChange={changeRoomNo}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='beds'>No of Beds:</label>
          <input
            type='number'
            name='beds'
            id='beds'
            className='form-control form-control-lg'
            value={beds}
            onChange={changeBeds}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='desc'>Description:</label>
          <textarea
            className='form-control form-control-lg'
            id='desc'
            rows='8'
            name='desc'
            onChange={changeDesc}
            value={desc}
          ></textarea>
        </div>
        <button className='btn btn-success btn-lg mt-5' type='submit'>
          Update Room
        </button>
      </form>
    </Fragment>
  );
};

export default RoomEdit;
