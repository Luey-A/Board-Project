import React, { useState } from "react";
import db from "../../firebaseConfig";
import EventForm from "../Eventform";
import "./style.css"

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
    <div>
      <div style={{ border: "1px solid red", width: "300px" }}>
        <p>Full Name:{props.event.fullName}</p>
        <p>Category: {props.event.category}</p>
        <p>Event Date: {toDateTime(props.event.chooseDate.seconds)}</p> 
        <p>Event name:{props.event.addEvent}</p>
        <p>description:{props.event.addDescription}</p>
        <p>Collaborators:{props.event.addCollaborators}</p>
        <p>Completed:{props.event.chooseCompleted ? "yes":"No"}</p>
      
        
          {isDisplayForm && <EventForm {...props.event} handleSubmit = {handleSubmit}/>}
        <button onClick={deleteEvent}>Delete event</button>
        <button onClick={editEvent}>Edit event</button>

      </div>
    </div>
  );
  }
