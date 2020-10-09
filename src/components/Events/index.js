import React from "react";
import Event from "../Event";

export default function Events(props) {
  return (
    <div>
      {props.events.map((event) => {
        return <Event event={event} />;
      })}
    </div>
  );
}
