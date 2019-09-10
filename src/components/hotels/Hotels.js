import React from 'react';
import HotelItem from './HotelItem'

const Hotels = props => {
  console.log(props);
  return (
    <div className='hotels row'>
      {props.hotelsList.map(hotel => <HotelItem hotel = {hotel} key={hotel.id}/>)}

    </div>
  );
};

export default Hotels;
