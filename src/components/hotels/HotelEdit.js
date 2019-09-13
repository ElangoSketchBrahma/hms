import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHotel } from '../../actions/HotelsActions';

const HotelEdit = props => {
  const hotels = useSelector(state => state.hotels);

  const dispatch = useDispatch();
  const hotel = hotels.filter(
    item => item.id === parseInt(props.match.params.id)
  );
  const [name, setName] = useState(hotel[0].name);
  const [address, setAddress] = useState(hotel[0].address);
  const [contact, setContact] = useState(hotel[0].contact);
  const [rooms] = useState(hotel[0].rooms);
  const changeName = e => {
    setName(e.target.value);
  };
  const changeAddress = e => {
    setAddress(e.target.value);
  };
  const changeContact = e => {
    setContact(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    const hotel = {
      id: parseInt(e.target.Hid.value),
      name: e.target.Hname.value,
      address: e.target.address.value,
      contact: e.target.contact.value,
      rooms: rooms
    };
    dispatch(updateHotel(hotel));
    props.history.goBack();
  };
  return (
    <Fragment>
      <h1 className='text-center display-4'>Edit Hotel</h1>
      <form onSubmit={formSubmit}>
        <input type='hidden' name='Hid' value={hotel[0].id} />
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            className='form-control'
            required
            name='Hname'
            value={name}
            onChange={changeName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            className='form-control'
            required
            name='address'
            value={address}
            onChange={changeAddress}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='contact'>Contact:</label>
          <input
            type='text'
            className='form-control'
            required
            name='contact'
            value={contact}
            onChange={changeContact}
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Update Hotel
        </button>
      </form>
    </Fragment>
  );
};

export default HotelEdit;
