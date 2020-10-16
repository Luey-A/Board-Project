import React, { useEffect, useState } from "react";
import Event from "../Event";
import Events from "../Events";
import db from "../../firebaseConfig";

export default function Completed() {
    const [events, setEvents] = useState([]);

    const fetchData = async () => {
    const res = await db.collection("users").get();
    console.log(res)
    const data = res.docs.map(el => {
    const data= el.data()
    const id=el.id
    return {id,...data}
    }) 

    setEvents(data)
    }
    
    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
         {events.map((event, index) => {
             let variant = ""
             if(index%2===0){
               variant="light"
             }else {
               variant ="info"
             }
            return event.chooseCompleted && <Event event={event} variant={variant}/>;
          })}
        </div>
    );
    }
