import React from "react";
import db from "../../firebaseConfig";

export default function Event(props) {
  const deleteEvent = () => {
    db.collection("users").doc(props.event.id).delete();
  };
  console.log(props.event.id);
  return (
    <div>
      <div style={{ border: "1px solid red", width: "300px" }}>
        <p>Event name:{props.event.addEvent}</p>
        <p>descrip:{props.event.addDescription}</p>
        <button onClick={deleteEvent}>Delete event</button>
      </div>
    </div>
  );
}
