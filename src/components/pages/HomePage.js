import React, { Fragment } from 'react';
import './css/homePage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const hotels = useSelector(state => state.hotels);

  return (
    <Fragment>
      <h1 className='mx-auto mt-5'>Hotels List</h1>
      <div className='row customer'>
        {hotels.map(hotel => (
          <div key={hotel.id} className='col-md-4 mt-4'>
            <div className='card'>
              <div className='card-header bg-dark text-white'>
                <h3>{hotel.name}</h3>
              </div>
              <div className='card-body'>
                <ul>
                  <li>
                    Location: <p className='d-inline-block'>{hotel.address}</p>
                  </li>
                  <li>
                    Rooms:{' '}
                    {hotel.rooms.length > 0 ? (
                      <p className='d-inline-block'>{hotel.rooms.length}</p>
                    ) : (
                      <p className='d-inline-block text-danger'>
                        No rooms to display
                      </p>
                    )}
                  </li>
                </ul>
              </div>
              <div className='card-footer'>
                {hotel.rooms.length > 0 ? (
                  <Link className='btn btn-primary' to={`/hotels/${hotel.id}`}>
                    View Hotel Rooms
                  </Link>
                ) : (
                  <button className='btn btn-primary' disabled>
                    No rooms to view
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;
