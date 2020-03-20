import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Segment } from "semantic-ui-react";


export default () => (
  <Segment raised size='large' >
       <Carousel autoPlay dynamicHeight={100} swipeable={true}>
    <div>
      <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
     
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
     
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1572814601679-4ef8f7b5ebd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
     
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1526336686748-bd7bb2f1df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1526336686748-bd7bb2f1df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1526336686748-bd7bb2f1df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1526336686748-bd7bb2f1df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </div>
  </Carousel>

  </Segment>
 );

 const align = {
  
}