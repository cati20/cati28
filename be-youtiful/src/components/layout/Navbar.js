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
            
            <li>Hello {client && client.name }</li>
            <li>
                <a onClick={onLogout} href="#">
                    <FontAwesomeIcon icon={faSignOutAlt}/><span className="hide-sm">Logout</span>
                </a>
            </li>
            
        </Fragment>
    );

    const guesthLinks = (
        <Fragment>
                 <li>
                    <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
                </li>
        </Fragment>
    );
    


    return (
        
       <Menu fixed="top" inverted>
         <Container>   
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Be youtiful nails
        </Menu.Item>
        <Menu.Item
          name='Home'
	>
	<Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link>
        </Menu.Item>
        <Menu.Item
          name='Gallery'
        />
        <Menu.Item
          name='Register'
        />
        <Menu.Item
          name='Sign In'
        />
	
        </Container>
      </Menu>



//{isAuthenticated? authLinks : guesthLinks }
                
           
    )
}

export default Navbar
