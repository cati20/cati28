import React ,{useState, useContext, useEffect} from 'react';
import BookingContext from '../../context/booking/bookingContext';
import AlertContext from '../../context/alert/alertContext'
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';




const BookingForm = () =>{

    const bookingContext = useContext(BookingContext);
    const {setAlert}= useContext(AlertContext)
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
        time: '',
        colour: ''
        
        
    })

    
   

    const {name, surname, cellphone, appointment, styling ,time, colour} = booking

    

    const onChange = (e) => setBooking({...booking, [e.target.name]: e.target.value});

    const onSubmit = (e) =>{
        e.preventDefault();
        if(current === null){
          if(name !== '' && surname !=='' && cellphone !== '' && appointment !== '' && time !== '' && styling !== '' && colour !=='' ){
            addBooking(booking);
          }else{
            setAlert('Please fill in all fields', 'danger')
          }
        }else{
            updateBooking(booking)
        }
        clearAll();
    

    }


    const clearAll = () =>{
         clearCurrent()
    }

    return(
         <Grid  style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      
        <h2 style={headers}>{current? "Update Appointment" : "Book an appointment"}</h2>
        
      
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' value={name} name="name" onChange={onChange} />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Surname' value={surname} name="surname" onChange={onChange} />
          <Form.Input fluid icon='phone' iconPosition='left' placeholder="Cellphone" type="phone" value={cellphone} name="cellphone" onChange={onChange} />
          <Form.Input fluid icon='als' iconPosition='left' placeholder="Gel or Acrylic" value={styling} name="styling" onChange={onChange} />
          <Form.Input icon='paint brush' iconPosition='left' placeholder="Nails Colour" name="colour" value={colour} onChange={onChange}  />
          <Form.Input fluid icon='calendar' iconPosition='left'  type="date" value={appointment} name="appointment" onChange={onChange} />
          <Form.Input fluid icon='clock' iconPosition='left' placeholder="Appointment Time" type="time" value={time} name="time" onChange={onChange} />
          
          <Button color='teal' fluid size='large'type="submit">
          {current? "Update" : "Book"}
          </Button>
        </Segment>
      </Form>
      {current !== null ? <Button basic fluid size='large' onClick={clearCurrent}>Clear</Button> : <div></div>}
    </Grid.Column>
  </Grid>
        
    )
}

const headers = {
  fontFamily: 'myriad-pro-light, serif',
  fontStyle: 'normal',
  fontWeight: 900,
  color: '#E03996'
  
}

export default BookingForm;
