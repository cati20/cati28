import React from 'react';
import TestimonialsPage from './TestimonialsPage'
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid, Segment, Image, Header, Divider, Icon, Button, Card, Responsive} from 'semantic-ui-react'

const Home = () =>{
    
     
    return(
     <Grid >


    <Responsive {...Responsive.onlyMobile} >
     <Segment size="large" raised style={{marginLeft:400}}>   
      <Grid columns={2} stackable textAlign='center' relaxed  >

      

      <Grid.Row verticalAlign='middle' >
        <Grid.Column >
            <Header style={headers}>Be-Youtiful Nails</Header>
        
            <Image src="../assets/puse.jpeg"/>
          


        </Grid.Column>

        <Grid.Column>
    <Header style={{marginLeft:0}}>
    <Card >
    <Image src='' wrapped ui={true} />
    <Card.Content style={{backgroundColor:"grey", opacity:50}}>
      <Card.Header style={textOnly}>Price: R120</Card.Header>
      <Card.Description>
        <p style={textOnly}>Gel</p>
        <p style={textOnly}>Acrylic</p>
        <p style={textOnly}>Choose your own design</p>
      </Card.Description>
    </Card.Content>
  </Card>
            
          </Header>
          <Button  style={textOnly} style={{backgroundColor:"#FB3A75", textAlign:"center"}} >Book Now</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
        </Segment>
      </Responsive>

    <Responsive {...Responsive.onlyComputer}>
    <Grid columns={2} stackable textAlign='center' relaxed>
    <Responsive {...Responsive.onlyComputer}>
    <Divider vertical><Icon name="sync"/></Divider>
    </Responsive>
      
      <Grid.Row verticalAlign='middle' style={{marginTop:40}}>
        <Grid.Column>
            <Header style={headers}>Be-Youtiful Nails</Header>
        
            <Image src="../assets/puse.jpeg"/>
          


        </Grid.Column>

        <Grid.Column>
    <Header style={{marginLeft:130}}>
    <Card >
    <Image src='' wrapped ui={true} />
    <Card.Content style={{backgroundColor:"grey"}}>
      <Card.Header style={textOnly}>Price: R120</Card.Header>
      <Card.Description>
        <p style={textOnly}>Gel</p>
        <p style={textOnly}>Acrylic</p>
        <p style={textOnly}>Choose your own design</p>
      </Card.Description>
    </Card.Content>
  </Card>
            
          </Header>
          <Button 
           style={textOnly} 
           style={{backgroundColor:"#FB3A75",textAlign:"center"}}
          
            >Book Now</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Responsive>

    </Grid>
        


    )
}


const textOnly = {
    fontFamily: 'minion-pro-italic, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    textAlign: 'center'
  }

  const headers = {
    fontFamily: 'myriad-pro-bold',
    fontStyle: 'normal',
    fontWeight: 800
  }

export default Home