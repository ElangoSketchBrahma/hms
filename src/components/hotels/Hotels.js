import React from 'react';
import {Route} from 'react-router-dom';
import './css/hotels.css';
import HotelsList from './HotelsList';
import HotelAdd from './HotelAdd';
import HotelEdit from './HotelEdit';
import HotelDelete from './HotelDelete';

const Hotels = props => {
  return (
    <div className='hotels mt-5'>
      <Route exact path='/admin/hotels' component={HotelsList} />
      <Route exact path='/admin/hotels/add' component={HotelAdd} />
      <Route exact path='/admin/hotels/edit/:id' component={HotelEdit} />
      <Route exact path='/admin/hotels/delete/:id' component={HotelDelete} />
    </div>
  );
};

export default Hotels;
