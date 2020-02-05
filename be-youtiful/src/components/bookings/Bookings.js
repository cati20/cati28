import React, { Fragment ,useContext } from  'react';
import BookingItem from './BookingItem'
import BookingContext from '../../context/booking/bookingContext'

const Bookings = () => {
    const bookingContext = useContext(BookingContext);

    const { bookings} = bookingContext;



    return (
        <Fragment>
            {bookings.map(booking => (
                <BookingItem key={booking.id} booking={booking}/>
            ))}
        </Fragment>
    )
}

export default Bookings;