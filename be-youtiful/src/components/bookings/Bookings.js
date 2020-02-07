import React, { Fragment ,useContext , useEffect} from  'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import BookingItem from './BookingItem'
import BookingContext from '../../context/booking/bookingContext';
import Spinner from '../layout/Spinner';

const Bookings = () => {
    const bookingContext = useContext(BookingContext);

    const { bookings, filtered , getBookings, loading} = bookingContext;

    useEffect( ()=>{
        getBookings();
        // eslint-disable-next-line
    }, [])



    if(bookings !== null && bookings.length=== 0 && !loading){
        return <h4>Please book an appointment</h4>
    }

    return (
        <Fragment>
            {bookings !== null && !loading ? (
                    <TransitionGroup>

                    {bookings.map(booking => (
                        <CSSTransition classNames="item" key={booking._id}timeout={500}>
                        <BookingItem  booking={booking}/>
                        </CSSTransition>
                    ))}

                    </TransitionGroup>
            ) : <Spinner />}
            
        </Fragment>
    )
}

export default Bookings;