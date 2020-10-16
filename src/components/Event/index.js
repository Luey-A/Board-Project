import React, { useState } from "react";
import db from "../../firebaseConfig";
import EventForm from "../Eventform";
import "./style.css"
import { Card, CardDeck} from 'react-bootstrap';

export default function Event(props) {
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const deleteEvent = () => {
    db.collection("users").doc(props.event.id).delete();
  };
  const editEvent = () => {
    setIsDisplayForm(true)
    };
    const handleSubmit = () => {
      setIsDisplayForm(false)
    }
    function toDateTime(secs) {
      const t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      const str = JSON.stringify(t)
      const onlyDate = str.split(" ");
      console.log(onlyDate);
      return onlyDate;
  }
  // console.log(props.event.id);
  // console.log(props.event);
  // console.log(JSON.stringify(toDateTime(props.event.chooseDate.seconds)));
  // console.log(typeof (toDateTime(props.event.chooseDate.seconds)));
  return (
    [
      'Info',
      'Light',
      'Dark',
    ].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem', textAlign: 'left', float:'left', margin:'1rem'}}
        className="mb-2"
      >
        <Card.Header>{props.event.addEvent} - {props.event.category}</Card.Header>
        <Card.Body>
          <Card.Text>
          <p>Full Name:     {props.event.fullName}</p>
          <p>Category:     {props.event.category}</p>
          <p>Event Date:     {toDateTime(props.event.chooseDate.seconds)}</p> 
          <p>Event name:     {props.event.addEvent}</p>
          <p>description:     {props.event.addDescription}</p>
          <p>Collaborators:     {props.event.addCollaborators}</p>
          <p>Completed:     {props.event.chooseCompleted ? "yes":"No"}</p>
      
        
          {isDisplayForm && <EventForm {...props.event} handleSubmit = {handleSubmit}/>}
          <button onClick={deleteEvent} style={{margin:'1rem'}}>Delete event</button>
          <button onClick={editEvent}>Edit event</button>
          </Card.Text>
        </Card.Body>
      </Card>
    ))
 
  );
  }
 // <div>
  //     <div style={{ border: "1px solid red", width: "300px" }}>
  //       <p>Full Name:{props.event.fullName}</p>
  //       <p>Category: {props.event.category}</p>
  //       <p>Event Date: {toDateTime(props.event.chooseDate.seconds)}</p> 
  //       <p>Event name:{props.event.addEvent}</p>
  //       <p>description:{props.event.addDescription}</p>
  //       <p>Collaborators:{props.event.addCollaborators}</p>
  //       <p>Completed:{props.event.chooseCompleted ? "yes":"No"}</p>
      
        
  //         {isDisplayForm && <EventForm {...props.event} handleSubmit = {handleSubmit}/>}
  //       <button onClick={deleteEvent}>Delete event</button>
  //       <button onClick={editEvent}>Edit event</button>

  //     </div>
  //   </div>


  
{/* <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardDeck> */}