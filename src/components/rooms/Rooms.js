import React from 'react';
import './css/rooms.css';
import { Route } from 'react-router-dom';
import RoomsList from './RoomsList';
import RoomAdd from './RoomAdd';
import RoomEdit from './RoomEdit';
import RoomDelete from './RoomDelete';

const Rooms = () => {
  return (
    <div className='rooms mt-5'>
      <Route exact path='/admin/rooms' component={RoomsList} />
      <Route exact path='/admin/rooms/add' component={RoomAdd} />
      <Route
        exact
        path='/admin/rooms/edit/:hotelId/:roomNo'
        component={RoomEdit}
      />
      <Route
        exact
        path='/admin/rooms/delete/:hotelId/:roomNo'
        component={RoomDelete}
      />
    </div>
  );
};

export default Rooms;
