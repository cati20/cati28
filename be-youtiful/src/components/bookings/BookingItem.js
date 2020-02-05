import React from 'react';
import {faPhone, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'



const BookingItem = ({booking}) => {
    const { name, surname, id, cellphone, styling, appointment,time } = booking 


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


            
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}

BookingItem.prototype= {
    booking : PropTypes.object.isRequired
}

export default BookingItem