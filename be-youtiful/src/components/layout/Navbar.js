import React ,{Fragment, useContext}from 'react';
import PropTypes from  'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BookingContext from '../../context/booking/bookingContext';
import {faSignOutAlt, faHome, faCameraRetro,faIdCard, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <li>
                    <Link to="/gallery"><FontAwesomeIcon icon={faCameraRetro}/>Gallery</Link>
                </li>
                <li>
                    <Link to="/about"><FontAwesomeIcon icon={faIdCard}/>About</Link>
                </li>
                <li>
                    <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/>Register</Link>
                </li>
                <li>
                    <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/>Login</Link>
                </li>
        </Fragment>
    );
    


    return (
        <div className=" navbar bg-primary">
            <h1>Navbar</h1>
            <ul>
            
                {isAuthenticated? authLinks : guesthLinks }
                
            </ul>
        </div>
    )
}

export default Navbar