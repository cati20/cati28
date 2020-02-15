import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import TestimonialsPage from './TestimonialsPage'
import "bootstrap/dist/css/bootstrap.min.css"
import {faSignOutAlt, faHome, faCameraRetro,faIdCard, faUserPlus, faSignInAlt, faAddressBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Icon, Image,Form, Button , Message, Segment, Grid, Header, Menu, Sidebar,} from 'semantic-ui-react'

const Home = () =>{
    const [visible, setVisible] = useState(true)
     
    return(
        <Grid verticalAlign='top' columns={1} stackable >
        <Grid.Row>
            <Grid.Column>
    
            </Grid.Column>
            
            <Grid.Column>
            <TestimonialsPage />
            </Grid.Column>
            

        </Grid.Row>
        </Grid>
    )
}

export default Home