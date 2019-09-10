import React from 'react';

const HotelItem = ({hotel}) => {
  return (
    <div className='col-md-4 mt-5'>
      <a href='/'>
        <div className='card'>
          <div className='card-header'>{hotel.name}</div>
          <div className='card-body'>{hotel.address}</div>
        </div>
      </a>
    </div>
  );
};

export default HotelItem;
