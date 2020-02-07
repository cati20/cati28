import React, { useReducer } from "react";
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
    CLEAR_FILTER,
    BOOKING_ERROR,
    GET_BOOKINGS,
    CLEAR_BOOKING
} from '../types'
import Axios from "axios";
 
const BookingState = props =>{
    const initialState ={
        bookings:null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(bookingReducer, initialState);

    //Get Bookings
    const getBookings = async () =>{
        
        try {
            const res = await Axios.get('/api/bookings');
            dispatch({
                 type: GET_BOOKINGS, 
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type:BOOKING_ERROR,
                payload: err.response.data.msg
            })
        }
    }

    //add booking
    const addBooking = async booking =>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await Axios.post('/api/bookings', booking, config);
            dispatch({
                 type: ADD_BOOKING, 
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type:BOOKING_ERROR,
                payload: err.response.data.msg
            })
        }

        
    }

    //delete booking
    const deleteBooking =async id =>{
        try {
            await Axios.delete(`/api/bookings/${id}`);
            dispatch({
                 type: DELETE_BOOKING,
                  payload: id 
                })
            
        } catch (err) {
            dispatch({
                type:BOOKING_ERROR,
                payload: err.response.data.msg
            })
        }
        
    }

    //update booking
    const updateBooking = async (booking)=>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await Axios.put(`/api/bookings/${booking._id}`, booking, config);
            dispatch({
                 type: UPDATE_BOOKING,
                  payload: res.data
                })

        } catch (err) {
            dispatch({
                type:BOOKING_ERROR,
                payload: err.response.data.msg
            })
            console.log(err.response.data.msg)
        }
        
        
    }

    //Clear Bookings
    const clearBookings = () =>{
        dispatch({
            type: CLEAR_BOOKING
        })
    }

    //set current booking
    const setCurrent = booking =>{
        
        dispatch({ type: SET_CURRENT, payload: booking })
    }
    //clear current booking
    const clearCurrent = ()=>{
        
        dispatch({ type: CLEAR_CURRENT})
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
                error: state.error,
                addBooking,
                deleteBooking,
                setCurrent,
                clearCurrent,
                updateBooking,
                filterBookings,
                clearFilter, getBookings,
                clearBookings
            }}
        >
            {props.children}
        </bookingContext.Provider>
    )


}


export default BookingState;