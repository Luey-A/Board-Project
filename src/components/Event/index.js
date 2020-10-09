import React, { useState } from "react";
import db from "../../firebaseConfig";
import Form from "../Eventform";
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
  // console.log(props.event.id);
  return (
    <div>
      <div style={{ border: "1px solid red", width: "300px" }}>
        <p>Event name:{props.event.addEvent}</p>
        <p>description:{props.event.addDescription}</p>
          {isDisplayForm && <Form {...props.event} handleSubmit = {handleSubmit}/>}
        <button onClick={deleteEvent}>Delete event</button>
        <button onClick={editEvent}>Edit event</button>

      </div>
    </div>
  );
  }
