import React, { Fragment } from 'react';
import { addHotel } from '../../actions/HotelsActions';
import { useDispatch } from 'react-redux';

const HotelAdd = props => {
  const dispatch = useDispatch();
  // submmiting add hotel form
  const formSubmit = e => {
    e.preventDefault();
    const hotel = {
      id: Date.now(),
      name: e.target.Hname.value,
      address: e.target.address.value,
      contact: e.target.contact.value,
      rooms:[]
    };
    dispatch(addHotel(hotel));
    props.history.goBack();
  };

  return (
    <Fragment>
      <h1 className='text-center display-4'>Add New Hotel</h1>
      <form onSubmit={formSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='Hname'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='address'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='contact'>Contact:</label>
          <input
            type='text'
            className='form-control form-control-lg'
            required
            name='contact'
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          Add Hotel
        </button>
      </form>
    </Fragment>
  );
};

export default HotelAdd;
