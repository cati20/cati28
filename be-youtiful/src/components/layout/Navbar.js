import React ,{Fragment, useContext}from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BookingContext from '../../context/booking/bookingContext';
import {faSignOutAlt, faHome, faCameraRetro,faUserPlus, faSignInAlt, faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Menu,Segment, Container, Responsive} from 'semantic-ui-react'
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
          <Menu.Menu position='right'>
          <Menu.Item
          name='Register'
          
          >
            <>Hello {" "} {client && client.name }</>
            
                <a onClick={onLogout} href="/">
                    <FontAwesomeIcon icon={faSignOutAlt}/><span className="hide-sm">Logout</span>
                </a>
            
            </Menu.Item>
            </Menu.Menu>
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
        
        <Menu.Item
          name='Sign In'
        >
           <Link to="/contact-us"><FontAwesomeIcon icon={faAddressBook}/>Contact Us</Link>
          </Menu.Item> 
        </Fragment>
    );
    
    

    return (
        
      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          
       <Menu fixed="top" inverted>
         <Container>   
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            <p style={headers} >Be Youtiful Nails</p>
        </Menu.Item>
        {isAuthenticated? authLinks : guesthLinks }
      
        </Container>
      </Menu>
        </Responsive>

        <Responsive as={Segment} {...Responsive.onlyTablet}>
        <Menu fixed="top" inverted>
         <Container>   
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Be youtiful nails
        </Menu.Item>
        {isAuthenticated? authLinks : guesthLinks }
      
        </Container>
      </Menu>
        </Responsive>


        <Responsive as={Segment} {...Responsive.onlyMobile}>
        <Menu fixed="top" inverted>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Be youtiful nails
        </Menu.Item>
        {isAuthenticated? authLinks :
        
      
       <Menu.Item
        
       >
          <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/>Log In</Link>
         </Menu.Item>
         
        
          
        
        }
         </Menu>
        </Responsive>

      </Segment.Group>


                
           
    )
}

const headers = {
  fontFamily: 'myriad-pro-light sans-serif',
  fontStyle: 'normal',
  fontWeight: 800,
  color:'white'
}

export default Navbar
