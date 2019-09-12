import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RoomsList = () => {
  const hotels = useSelector(state => state.hotels);
  const hotelsWithRoom = hotels.filter(hotel => hotel.rooms.length > 0);

  return (
    <Fragment>
      <h1 className='text-center display-4'>Rooms List</h1>
      <Link
        to='/admin/rooms/add'
        className='btn btn-primary float-right mb-3 btn-lg'
      >
        Add Room
      </Link>
      ;
      {hotelsWithRoom.length > 0 ? (
        hotelsWithRoom.map((hotel, index) => (
          <Fragment key={index}>
            <h2 className='text-center text-success mt-5 pt-5 mb-2'>
              {hotel.name}
            </h2>
            <table className='table mb-5'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>S.no</th>
                  <th scope='col'>Hotel name</th>
                  <th scope='col'>Room No</th>
                  <th scope='col'>Beds</th>
                  <th scope='col'>Desc</th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {hotel.rooms.map((room, index) => (
                  <tr key={room.roomNo}>
                    <td className='w-10'>{index + 1}</td>
                    <td className='w-17'>{hotel.name}</td>
                    <td className='w-10'>{room.roomNo}</td>
                    <td className='w-10'>{room.beds}</td>
                    <td className='w-17'>{room.desc}</td>
                    <td className='w-17  text-center'>
                      <Link
                        to={`/admin/rooms/edit/${hotel.id}/${room.roomNo}`}
                        className='btn btn-success btn-lg'
                      >
                        Edit
                      </Link>
                    </td>
                    <td className='w-17'>
                      <Link
                        to={`/admin/rooms/delete/${hotel.id}/${room.roomNo}`}
                        className='btn btn-danger btn-lg'
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fragment>
        ))
      ) : (
        <h2 className='mt-5 pt-5 text-center text-danger'>No rooms to Show</h2>
      )}
      {/* {hotelsWithRoom.map((hotel, index) => (
        <Fragment key={index}>
          <h2 className='text-center text-success mt-5 pt-5 mb-2'>{hotel.name}</h2>
          <table className='table mb-5'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>S.no</th>
                <th scope='col'>Hotel name</th>
                <th scope='col'>Room No</th>
                <th scope='col'>Beds</th>
                <th scope='col'>Desc</th>
                <th scope='col'></th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {hotel.rooms.map((room, index) => (
                <tr key={room.roomNo}>
                  <td className='w-10'>{index + 1}</td>
                  <td className='w-17'>{hotel.name}</td>
                  <td className='w-10'>{room.roomNo}</td>
                  <td className='w-10'>{room.beds}</td>
                  <td className='w-17'>{room.desc}</td>
                  <td className='w-17  text-center'>
                    <Link
                      to={`/admin/rooms/edit/${hotel.id}/${room.roomNo}`}
                      className='btn btn-success btn-lg'
                    >
                      Edit
                    </Link>
                  </td>
                  <td className='w-17'>
                    <Link
                      to={`/admin/rooms/delete/${hotel.id}/${room.roomNo}`}
                      className='btn btn-danger btn-lg'
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      ))} */}
    </Fragment>
  );
};

export default RoomsList;
