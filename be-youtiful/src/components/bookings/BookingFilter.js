import React, {useContext, useRef, useEffect} from 'react'
import BookingCotext from '../../context/booking/bookingContext';

const BookingFilter = () =>{
    const bookingContext = useContext(BookingCotext);
    const {filterBookings, clearFilter, filtered} = bookingContext

    const text = useRef();

    useEffect(()=> {
        if(filtered === null){
            text.current.value = '';
        }
    })

    const onChange = (e) =>{
        if(text.current.value !== ''){
            filterBookings(e.target.value)
        }else{
            clearFilter();
        }
    }



    return (
        <form>
            <input  ref={text} type="text" placeholder="search bookings...." onChange={onChange} />
        </form>
    )
}

export default BookingFilter;