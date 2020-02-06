import React, { Fragment ,useContext } from  'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import BookingItem from './BookingItem'
import BookingContext from '../../context/booking/bookingContext'

const Bookings = () => {
    const bookingContext = useContext(BookingContext);

    const { bookings, filtered } = bookingContext;

    if(bookings.lenght===0){
        return <h4>Please book an appointment</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>

            {bookings.map(booking => (
                <CSSTransition classNames="item" key={booking.id}timeout={500}>
                <BookingItem  booking={booking}/>
                </CSSTransition>
            ))}

            </TransitionGroup>
        </Fragment>
    )
}

export default Bookings;