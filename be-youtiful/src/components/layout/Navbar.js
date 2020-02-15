import React ,{Fragment, useContext}from 'react';
import PropTypes from  'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BookingContext from '../../context/booking/bookingContext';
import {faSignOutAlt, faHome, faCameraRetro,faIdCard, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Menu,Segment, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const bookingContext =useContext(BookingContext);

    const {clearBookings} = bookingContext
    const {isAuthenticated, logout, client} = authContext;

    const onLogout = () =>{
        logout();
        clearBookings();
    }
    const authLinks = (
        <Fragment>
          <Menu.Item
          name='Register'
          floated='right'
          >
            <>Hello {" "} {client && client.name }</>
            
                <a onClick={onLogout} href="#">
                    <FontAwesomeIcon icon={faSignOutAlt}/><span className="hide-sm">Logout</span>
                </a>
            
            </Menu.Item>
        </Fragment>
    );

    const guesthLinks = (
        <Fragment>
         <Menu.Item
          name='Home'
	      >
        <Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link>
        </Menu.Item>
        <Menu.Item
          name='Gallery'
        >
        <Link to="/gallery"><FontAwesomeIcon icon={faCameraRetro}/>Gallery</Link>
        </Menu.Item>
        <Menu.Item
          name='Register'
        >
           <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/>Sign Up</Link>
           </Menu.Item>
        <Menu.Item
          name='Sign In'
        >
           <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/>Sign In</Link>
          </Menu.Item> 
        </Fragment>
    );
    


    return (
        
       <Menu fixed="top" inverted>
         <Container>   
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Be youtiful nails
        </Menu.Item>
        {isAuthenticated? authLinks : guesthLinks }
	
        </Container>
      </Menu>




                
           
    )
}

export default Navbar
