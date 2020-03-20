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
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import { Segment, Responsive, Icon, Menu, Sidebar, Image, Button, Card, Container, Grid, Sticky} from 'semantic-ui-react';

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
      
    <Navbar />
    <Alerts />
    
    <Responsive  as={Menu.Item} {...Responsive.onlyMobile} style={{marginTop:0}} >
      <Menu  inverted>
      <Button  icon="th"  onClick={setVisible}/>
      </Menu>
      <Sidebar   style={{marginTop:60}}
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={visible}
        onVisible={() =>setVisible(true) }
        onHide={() =>setVisible(false)}
        width='thin'
        direction="right"
      >
        <Menu.Item >
          <Icon name='home' />
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item >
          <Icon name='camera retro' />
          <Link to="/gallery">Gallery </Link>
        </Menu.Item>
        <Menu.Item >
          <Icon name='sign-in' />
          <Link to="/login">Sign In </Link>
        </Menu.Item>
        <Menu.Item >
          <Icon name='signup' />
          <Link to="/register">Sign-Up </Link>
        </Menu.Item>
        <Menu.Item >
          <Icon name='phone' />
          <Link to="/contact-us">Contact Us </Link>
        </Menu.Item>
      </Sidebar>
    </Responsive>

    

    


    <Responsive {...Responsive.onlyComputer}>
    <Segment raised floated="right" style={{marginRight:120}} size="large" > 
    <Grid centered container divided doubling stretched 
 stackable columns={1}>
      <Grid.Column >
        
          <Switch>
            <PrivateRoute  exact path='/book' component= {Book}/>
            <Route exact path='/' component= {Home} />
            <Route exact path='/gallery' component= {Gallery} />
            <Route exact path='/contact-us' component= {Contact} />
            <Route exact path='/register' component= {Register} />
            <Route exact path='/login' component= {Login} />
          </Switch>
        
        </Grid.Column>
        </Grid>
        </Segment>
    </Responsive>

    <Responsive  {...Responsive.onlyMobile}>
    <Segment raised floated="right"  > 
    <Grid centered container divided doubling stretched 
 stackable columns={1}>
      <Grid.Column >
        
          <Switch>
            <PrivateRoute  exact path='/book' component= {Book}/>
            <Route exact path='/' component= {Home} />
            <Route exact path='/gallery' component= {Gallery} />
            <Route exact path='/contact-us' component= {Contact} />
            <Route exact path='/register' component= {Register} />
            <Route exact path='/login' component= {Login} />
          </Switch>
        
        </Grid.Column>
        </Grid>
        </Segment>
    </Responsive>


    </Router>
    </AlertState>
    </BookingState>
    </AuthState>
  );
}

export default App;