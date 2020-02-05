import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//import bookingState from './context/booking/bookingState';
import BookingState from './context/booking/BookingState';

function App() {
  return (
    <BookingState>
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route  exact path='/' component= {Home}/>
            <Route exact path='/about' component= {About} />
            /<Route exact path='/gallery' component= {Gallery} />
          </Switch>
        </div>
      </Fragment>      
    </Router>
    </BookingState>
  );
}

export default App;
