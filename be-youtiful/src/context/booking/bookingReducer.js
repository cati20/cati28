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
        default:
            return state;    
    }
}