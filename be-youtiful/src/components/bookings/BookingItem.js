import React, {useContext} from 'react';
import BookingContext from '../../context/booking/bookingContext';
import AuthContext from '../../context/auth/authContext';
import {faPhone, faCalendarAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'



const BookingItem = ({booking}) => {
    const bookingContext =  useContext(BookingContext) 
    const authContext = useContext(AuthContext);

    const {client} = authContext;
    const {deleteBooking, setCurrent,clearCurrent} = bookingContext;
    const { name, surname, _id, cellphone, styling, appointment,time } = booking 

    const onDelete = () =>{
        deleteBooking(_id);
        clearCurrent();
    }

    return(
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '}{surname}
                <span 
                style={{float : 'right'}}
                className={'badge ' + (styling === 'acrylic' ?
                'badge-success' : 'badge-primary') } 
                > 
                {styling.charAt(0).toUpperCase() + styling.slice(1)} 
                </span>
            </h3>

            <ul className="list">
                {cellphone && (<li>
                <FontAwesomeIcon icon={faPhone} /> {cellphone}
                </li>)}
            </ul>

            <ul className="list">
                {cellphone && (<li>
                <FontAwesomeIcon icon={faCalendarAlt} /> {appointment}
                </li>)}
            </ul>

            <ul className="list">
                {cellphone && (<li>
                <FontAwesomeIcon icon={faClock} /> {time}
                </li>)}
            </ul>
            
            <ul className="list">
                {cellphone && (<li>
                <FontAwesomeIcon icon={faEnvelopeclear} /> {client.email}
                </li>)}
            </ul>

            
            <p>
                <button className="btn btn-dark btn-sm" onClick={()=> setCurrent(booking)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

BookingItem.prototype= {
    booking : PropTypes.object.isRequired
}

export default BookingItem