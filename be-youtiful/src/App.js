import React, { Fragment ,useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/layout/Navbar';
import Book from './components/pages/Book';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Footer from './components/pages/Footer';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import { Segment, Responsive, Icon, Menu, Sidebar, Header,Image, Button, Card} from 'semantic-ui-react';

//import bookingState from './context/booking/bookingState';
import BookingState from './context/booking/BookingState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';




if(localStorage.token){
  setAuthToken(localStorage.token)
}


const App = () => {

  const [visible, setVisible] = useState(false)

  return (
    <AuthState>
    <BookingState>
      <AlertState >
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Alerts />
      <Segment.Group>
      <Responsive as={Segment} {...Responsive.onlyMobile}>
      <Button floated='right' compact content="click me" style={{marginLeft:69}} onClick={setVisible}/>
      <Sidebar.Pushable as={Segment} >
      <Sidebar
        as={Menu}
        animation='slide along'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        onVisible={() =>setVisible(true) }
        onHide={() =>setVisible(false)}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='sign-in' />
          <Link to="/login">Sign In </Link>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='signup' />
          <Link to="/register">Sign-Up </Link>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='phone' />
          <Link to="/contact-us">Contact Us </Link>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible} >
        <Card piled >
        <Image src='https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net

C/O https://placeholder.com/'/>
          
        </Card>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </Responsive>
      </Segment.Group>
          <Switch>
            <PrivateRoute  exact path='/book' component= {Book}/>
            <Route exact path='/' component= {Home} />
            <Route exact path='/gallery' component= {Gallery} />
            <Route exact path='/contact-us' component= {Contact} />
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
