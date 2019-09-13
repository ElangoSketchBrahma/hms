import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HotelRooms = props => {
  const hotels = useSelector(state => state.hotels);
  const selectedHotel = hotels.filter(
    hotel => hotel.id === parseInt(props.match.params.id)
  );

  return (
    <Fragment>
      <h1 className='mx-auto mt-5'>Rooms List</h1>
      <div className='row customer'>
        {selectedHotel[0].rooms.map((room, index) => (
          <div key={index} className='col-md-4 mt-4'>
            <div className='card'>
              <div className='card-header bg-dark text-white'>
                <h3>Room no: {room.roomNo}</h3>
              </div>
              <div className='card-body'>
                <ul>
                  <li>
                    Beds:{'  '}
                    {room.beds}
                  </li>
                  <li>
                    description:{'  '}
                    {room.desc}
                  </li>
                </ul>
              </div>
              <div className='card-footer'>
                <Link
                  to={`/book/${selectedHotel[0].id}/${room.roomNo}`}
                  className='btn btn-success'
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HotelRooms;
