import React ,{useState, useContext, useEffect} from 'react';
import BookingContext from '../../context/booking/bookingContext';
import AuthContext from '../../context/auth/authContext';
import Calendar from 'react-calendar';
import {fascalendar, faCalendar, faCalendarAlt ,faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimePicker from 'react-time-picker';




const BookingForm = () =>{

    const bookingContext = useContext(BookingContext);
    const {addBooking ,updateBooking ,clearCurrent, current} =bookingContext
    
    useEffect(()=>{
        if(current !== null){
            setBooking(current)
        }else{
            setBooking({
                name: '',
                surname: '',
                cellphone:'',
                appointment:'',
                styling:''
                
            })
        }
    }, [bookingContext, current])

    const [booking, setBooking] =useState({
        name: '',
        surname: '',
        cellphone:'',
        appointment:'',
        styling:'',
        
        
    })

    const [cal, setCall] = useState({ date: new Date()})
    const [App_time, setApp_time] = useState({ time:'10:00'})
    

    const {name, surname, cellphone, appointment, styling } = booking

    const {date} =cal
    const{time} = App_time

    const onChanged = date => setCall({date:date})

    const onTime = (time) => setApp_time({time:time})
    

    const onChange = (e) => setBooking({...booking, [e.target.name]: e.target.value});

    const onSubmit = (e) =>{
        e.preventDefault();
        if(current === null){
            addBooking(booking);
        }else{
            updateBooking(booking)
        }
        clearAll();
    

    }


    const clearAll = () =>{
         clearCurrent()
    }

    return(
        
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Booking': 'Add Booking'}</h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                required
            />

            <input
                type="text"
                placeholder="Surname"
                name="surname"
                value={surname}
                onChange={onChange}
                required
            />

            <input
                type="text"
                placeholder="cellphone"
                name="cellphone"
                value={cellphone}
                onChange={onChange}
                required
            />

            <input
                type="text"
                placeholder="Style"
                name="styling"
                value={styling}
                onChange={onChange}
                required
            />
             <input
                type="text"
                placeholder="Appointment"
                name="appointment"
                value={date}
                onFocus={onChange}
                required
            />

            <input
                type="text"
                placeholder="time"
                name="time"
                value={time}
                onFocus={onChange}
                required
            />




            <p>Choose the date appointment date on the calendar</p>
            <FontAwesomeIcon icon={faCalendar} />
            < Calendar
                onChange={onChanged}
                value={date}
            />
        
        <p>Click the time picker to select time</p>
        <FontAwesomeIcon icon={faClock} />
        {' '}
        <TimePicker
            onChange={onTime}
            value={time}
        />


            <div>
                <input type="submit" value={current ? 'Update Booking': 'Booking An Appointment'}  className="btn btn-primary btn-block" />
            </div>

            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div>}
        </form>

    )
}

export default BookingForm;