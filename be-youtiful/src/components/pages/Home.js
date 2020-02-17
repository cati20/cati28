import React from 'react';
import TestimonialsPage from './TestimonialsPage'
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid} from 'semantic-ui-react'

const Home = () =>{
    
     
    return(
        <Grid verticalAlign='top' columns={1} stackable >
        <Grid.Row>
            <Grid.Column>
            <div>gkakadsdsdsdfdsfdfdfsfsdsd</div>
            </Grid.Column>
            
            <Grid.Column>
            <TestimonialsPage />
            </Grid.Column>
            

        </Grid.Row>
        </Grid>
    )
}

export default Home