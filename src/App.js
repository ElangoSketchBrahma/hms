import React from 'react';
import './App.css';
import Header from './components/layout/header/header';
import Admin from './components/admin/Admin';
import HomePage from './components/pages/HomePage';
import HotelRooms from './components/pages/HotelRooms';
import BookRoom from './components/pages/BookRoom';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/hotels/:id' component={HotelRooms} />
            <Route
              exact
              path='/book/:hotelId/:roomNo'
              component={BookRoom}
            />
            <Route path='/admin' component={Admin} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
