import React, {useContext} from 'react';
import BookingContext from '../../context/booking/bookingContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext'
import PropTypes from 'prop-types'
import { Card, Icon, Image, Button , Message, Segment, Grid} from 'semantic-ui-react'



const BookingItem = ({booking}) => {
    const bookingContext =  useContext(BookingContext) 
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext)

    const {client} = authContext;
    const {deleteBooking, setCurrent,clearCurrent} = bookingContext;
    const { name, surname, _id, cellphone, styling, appointment,time,colour } = booking
    const {setAlert} = alertContext

    

    const onDelete = () =>{
        deleteBooking(_id);
        clearCurrent();
    }

    return(
        <Grid  style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        <Card fluid>
        <Image src='' wrapped ui={false} />
        <Card.Content>
          <Card.Header style={textOnly} >{booking.name}</Card.Header>
          <Card.Meta>
            <span className='date' style={textOnly} > Date Joined: {" "}{booking.date.slice(0,10)}</span>
          </Card.Meta>
          <Card.Description>
          <Message floating style={textOnly} ><Icon name='user' />{name}{" "}{surname}</Message>
            <Message floating style={textOnly} ><Icon name='phone' />{cellphone}</Message>
            <Message floating style={textOnly} ><Icon name='mail' />{client.email}</Message>
            <Message floating style={textOnly} ><Icon name='calendar' />{appointment}</Message>
            <Message floating style={textOnly} ><Icon name='clock' />{time}</Message>
            <Message floating style={textOnly} ><Icon name='als' />{styling}</Message>
            <Message floating style={textOnly} ><Icon name='paint brush' />{colour}</Message>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
              <Button  color="#555" content="Edit" onClick={()=> setCurrent(booking)} />
              <Button  color="pink" content="Delete" onClick={onDelete} />
          </Button.Group>
        </Card.Content>
      </Card>
      </Segment>
      </Grid.Column>
  </Grid>
    )
}

BookingItem.prototype= {
    booking : PropTypes.object.isRequired
}

const textOnly = {
  fontFamily: 'minion-pro-italic, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500
}

export default BookingItem