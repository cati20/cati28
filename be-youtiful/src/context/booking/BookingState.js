import React, { useReducer } from "react"
import bookingContext from './bookingContext';
import uuid from 'uuid';
import bookingReducer from './bookingReducer';
import {
    ADD_BOOKING,
    DELETE_BOOKING,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BOOKING,
    FILTER_BOOKING,
    CLEAR_FILTER
} from '../types'
 
const BookingState = props =>{
    const initialState ={
        bookings:[
            {
                styling: "acrylic",
                id: "1",
                name: "milton",
                surname: "ngobeni",
                cellphone: "078-729-349",
                appointment: "28 February 2021",
                client: "5e34b646687a9ca1001a5041",
                date: "2020-01-31T23:25:21.615Z",
                time:"15H00"
                
            },
            {
                styling: "acrylic",
                id: "2",
                name: "phemelo",
                surname: "modiba",
                cellphone: "078-729-349",
                appointment: "28 February 2021",
                client: "5e34b646687a9ca1001a5041",
                date: "2020-01-31T23:25:21.615Z",
                time:"15H00"
                
            },
            {
                styling: "gel",
                id: "3",
                name: "puseletso",
                surname: "sekgobela",
                cellphone: "078-729-349",
                appointment: "28 February 2021",
                client: "5e34b646687a9ca1001a5041",
                date: "2020-01-31T23:25:21.615Z",
                time:"15H00"
                
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(bookingReducer, initialState);


    //add booking
    const addBooking = booking =>{
        booking.id = uuid.v4();
        dispatch({ type: ADD_BOOKING, payload: booking});
    }

    //delete booking
    const deleteBooking = id =>{
        
        dispatch({ type: DELETE_BOOKING, payload: id })
    }
    //set current booking
    const setCurrent = booking =>{
        
        dispatch({ type: SET_CURRENT, payload: booking })
    }
    //clear current booking
    const clearCurrent = ()=>{
        
        dispatch({ type: CLEAR_CURRENT})
    }
    //update booking
    const updateBooking = (booking)=>{
        
        dispatch({ type: UPDATE_BOOKING, payload: booking})
    }

    //filter booking
    const filterBookings = (text)=>{
        
        dispatch({ type: FILTER_BOOKING, payload: text})
    }
    //clear filter
    const clearFilter = ()=>{
        
        dispatch({ type: CLEAR_FILTER})
    }
    
    return(
        <bookingContext.Provider
            value={{
                bookings : state.bookings,
                current: state.current,
                filtered: state.filtered,
                addBooking,
                deleteBooking,
                setCurrent,
                clearCurrent,
                updateBooking,
                filterBookings,
                clearFilter
            }}
        >
            {props.children}
        </bookingContext.Provider>
    )


}


export default BookingState;