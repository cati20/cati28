import React ,{useContext , useEffect}from  'react'
import Bookings from '../bookings/Bookings'
import BookingForm from '../bookings/BookingForm'
import BookingFilter from '../bookings/BookingFilter'
import AuthContext from '../../context/auth/authContext';
import { Divider, Grid,Container , Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Book = () => {
    const {loadClient} = useContext(AuthContext)
    //const {loadClient} = authContext

    useEffect(()=> {
        loadClient();
        // eslint-disable-next-line
    },[])

    return(
        
    <Container placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <BookingForm />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Bookings />
      </Grid.Column>
    </Grid>
    <Divider vertical><Icon name='right arrow' /></Divider>
  </Container>
    )
}

export default Book