import React,{useEffect} from 'react';
import TestimonialsPage from './TestimonialsPage'
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () =>{

    return(
        <div classNameName="container">

            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
            </div>
            
            <TestimonialsPage />

        
        </div>
    )
}

export default Home