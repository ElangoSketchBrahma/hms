import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/header/header';
import Hotels from './components/hotels/Hotels';
import Rooms from './components/rooms/Rooms';
import Users from './components/users/Users';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [hotels, setHotels] = useState([]);

  const hotelsList = [
    {
      id: 1,
      name: 'Royal Park',
      address: 'Banglore',
      contact: '123456789'
    },
    {
      id: 2,
      name: 'Holiday In',
      address: 'Banglore',
      contact: '123456789'
    },
    {
      id: 3,
      name: 'Seven hills ',
      address: 'Banglore',
      contact: '123456789'
    },
    {
      id: 4,
      name: 'Manis Hotel',
      address: 'Banglore',
      contact: '123456789'
    },
    {
      id: 5,
      name: 'Le Meridian',
      address: 'Banglore',
      contact: '123456789'
    }
  ];
  // setHotels(hotelsList);
  // setHotels([1,2,3,4]);

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/admin/hotels'
              render={props => <Hotels {...props} hotelsList={hotelsList} />}
            />
            <Route exact path='/admin/rooms' component={Rooms} />
            <Route exact path='/admin/users' component={Users} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
