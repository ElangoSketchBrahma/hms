import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HotelsList = () => {
  const hotels = useSelector(state => state.hotels);

  return (
    <Fragment>
      <h1 className='text-center display-4'>Hotels List</h1>
      <Link
        to='/admin/hotels/add'
        className='btn btn-primary float-right mb-3 btn-lg'
      >
        Add Hotel
      </Link>
      {hotels.length > 0 ? (
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>S.no</th>
              <th scope='col'>Name</th>
              <th scope='col'>Location</th>
              <th scope='col'>Contact</th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel.id}>
                <td>{index + 1}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.contact}</td>
                <td>
                  <Link
                    to={`/admin/hotels/edit/${hotel.id}`}
                    className='btn btn-success btn-lg'
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin/hotels/delete/${hotel.id}`}
                    className='btn btn-danger btn-lg'
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='mt-5 pt-5 text-center text-danger'>No Hotels to Show</h2>
      )}
    </Fragment>
  );
};

export default HotelsList;
