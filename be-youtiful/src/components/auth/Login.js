import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Login = props => {


    const alertContext =  useContext(AlertContext)
    const authContext =  useContext(AuthContext)

    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated, loadClient } = authContext;
    
    
     useEffect( ()=> {
        if(isAuthenticated){
            props.history.push('/book')
        }


         if(error){
             setAlert(error,'danger');
             clearErrors();
             
         }
         // eslint-disable-next-line
     },[error, isAuthenticated, props.history]);




    const [client, setClient] = useState({
        email:'',
        password : '',
        
    })

    const {email, password} = client;

    const onChange = e => setClient({...client, [e.target.name]: e.target.value })

    const onSubmit = (e) =>{
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert('Please fill in all fields', 'danger')
        }else{
            login({
                email,
                password
            }) 

            loadClient()
        }
        
    }

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='assets/logo.png' /> <h2 style={headers}>Log-in to your account</h2>
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked >
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} name="email" onChange={onChange} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
	    value={password}
	    name="password" 
	    onChange={onChange}
          />

          <Button color='teal' fluid size='large' type="submit">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/register'>Sign Up</a>
      </Message>
      
    </Grid.Column>
  </Grid>
    )
}

const headers = {
  fontFamily: 'myriad-pro-light, serif',
  fontStyle: 'normal',
  fontWeight: 500,
  color: '#E03996'
}
export default Login
