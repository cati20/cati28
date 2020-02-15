import React ,{useContext , useEffect}from  'react'
import Bookings from '../bookings/Bookings'
import BookingForm from '../bookings/BookingForm'
import AuthContext from '../../context/auth/authContext';
import { Grid,Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Book = () => {
    const {loadClient} = useContext(AuthContext)
    //const {loadClient} = authContext

    useEffect(()=> {
        loadClient();
        // eslint-disable-next-line
    },[])

    return(
        
    <Container  >
    <Grid columns={2}  stackable>
      <Grid.Column>
      <BookingForm />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Bookings />
      </Grid.Column>
    </Grid>
    
  </Container>
    )
}

export default Book