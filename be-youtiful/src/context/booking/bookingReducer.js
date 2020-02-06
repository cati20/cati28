import {
    ADD_BOOKING,
    DELETE_BOOKING,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BOOKING,
    FILTER_BOOKING,
    CLEAR_FILTER
} from '../types'


export default (state, action) =>{
    switch(action.type){
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            };
        case UPDATE_BOOKING:
            return{
                ...state,
                bookings: state.bookings.map(booking => booking.id === action.payload.id? 
                action.payload: booking   
                 )
            };    
        case DELETE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(booking => booking.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
         case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            };    
        case FILTER_BOOKING:
            return {
                ...state,
                filtered: state.bookings.filter(booking =>{
                    const regex = new RegExp(`${action.payload}, 'gi`);
                    return booking.name.match(regex) || booking.cellphone.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered:null
            }    
        default:
            return state;    
    }
}