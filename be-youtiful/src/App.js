import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Book from './components/pages/Book';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'


//import bookingState from './context/booking/bookingState';
import BookingState from './context/booking/BookingState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';


if(localStorage.token){
  setAuthToken(localStorage.token);
  console.log(localStorage.token)
}



const App = () => {
  return (
    <AuthState>
    <BookingState>
      <AlertState >
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Alerts />
          <Switch>
            <PrivateRoute  exact path='/book' component= {Book}/>
            <Route exact path='/' component= {Home} />
            <Route exact path='/gallery' component= {Gallery} />
            <Route exact path='/about' component= {About} />
            <Route exact path='/register' component= {Register} />
            <Route exact path='/login' component= {Login} />
          </Switch>
        </div>
      </Fragment>      
    </Router>
    </AlertState>
    </BookingState>
    </AuthState>
  );
}

export default App;
