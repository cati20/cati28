import React ,{useContext , useEffect}from  'react'
import Bookings from '../bookings/Bookings'
import BookingForm from '../bookings/BookingForm'
import BookingFilter from '../bookings/BookingFilter'
import AuthContext from '../../context/auth/authContext';
const Home = () => {
    const authContext = useContext(AuthContext)
    const {loadClient} = authContext
    useEffect( ()=> {
        loadClient();
        // eslint-disable-next-line
    },[])
    return(
        < div className="grid-2">
            <div>
                <BookingForm />
            </div>
            <div>
                <Bookings />
            </div>
        </div>
    )
}

export default Home