import React from 'react';
import './App.css';
import Header from './components/layout/header/header';
import Admin from './components/admin/Admin';
// import Hotels from './components/hotels/Hotels';
// import Rooms from './components/rooms/Rooms';
// import Users from './components/users/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/admin' component={Admin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
