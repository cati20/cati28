import React from  'react';
import { Card, Icon, Image,Form, Button , Message, Segment, Grid, Divider} from 'semantic-ui-react'



const About = () => {
    return(
      <Segment pilled>
    <Grid stackable columns={2}>   
<Divider vertical >Or</Divider>
        <Grid.Column > 
        <Card style={{marginTop:90}}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={true} />
        <Card.Content>
          <Card.Header>Puseletso</Card.Header>
          <Card.Meta>
            <span className='date'>Founder</span>
          </Card.Meta>
          <Card.Description>
            Puseletso is the founder of Be youtiful Nails.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Message ><Icon name="phone" />068-2929-079</Message>
          <Message ><Icon name="mail" />be-younail@gmail.com</Message>
        </Card.Content>
      </Card>
      </Grid.Column>
    



 <Grid.Column  >      
<Form fluid style={{marginTop:90}}>
<Form.Group widths='equal' block>
  <Form.Input fluid label='First name' placeholder='Full Name' />
  <Form.Input fluid label='Email' placeholder='E-mail' />
  <Form.Input fluid label='Cellphone' placeholder='Cellphone' />

</Form.Group>
<Form.Group inline>
  <label>Prefered Contact Method</label>
  <Form.Radio
    label='Phone'
  />
  <Form.Radio
    label='Email'
    
  />

</Form.Group>
<Form.TextArea label='About' placeholder='Tell us more about you...' />
<Form.Button style={{marginTop: 15}} >Submit</Form.Button>
</Form>
</Grid.Column>

</Grid>
</Segment>
)

}

export default About