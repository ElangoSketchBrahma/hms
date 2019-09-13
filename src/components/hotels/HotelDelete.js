import React from 'react';
import { deleteHotel } from '../../actions/HotelsActions';
import { useDispatch } from 'react-redux';

const HotelDelete = props => {
  const dispatch = useDispatch();
  const yes = () => {
    dispatch(deleteHotel(parseInt(props.match.params.id)));
    props.history.goBack();
  };
  const no = () => {
    props.history.goBack();
  };
  return (
    <div>
      <h2>Are you sure you want to delete this hotel ?</h2>
      <button className='btn btn-success mr-3 mt-5' onClick={no}>
        No, Keep it
      </button>
      <button className='btn btn-danger mt-5' onClick={yes}>
        Yes, Delete
      </button>
    </div>
  );
};

export default HotelDelete;
