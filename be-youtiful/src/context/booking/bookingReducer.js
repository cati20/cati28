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


export default (state, action) =>{
    switch(action.type){
        case GET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
                loading: false
            }
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [action.payload, ...state.bookings ],
                loading: false
            };
        case UPDATE_BOOKING:
            return{
                ...state,
                bookings: state.bookings.map(booking => booking._id === action.payload._id? 
                action.payload: booking   
                 ),
                 loading: false
            };    
        case DELETE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(booking => booking._id !== action.payload),
                loading: false
            };
        case CLEAR_BOOKING:
            return {
                ...state,
                bookings: null,
                filtred: null,
                error: null,
                current:null
            }    
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
        case BOOKING_ERROR:
            return {
                ...state,
                error: action.payload
            };   
        default:
            return state;    
    }
}