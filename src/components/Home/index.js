import React, { useEffect, useState } from "react";
import Eventform from "../Eventform";
import Events from "../Events";
import db from "../../firebaseConfig";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [display, setDisplay] = useState(false);

  const fetchData = async () => {
    const res = await db.collection("demo").doc("header").get();
    // const data = res.data();

    await db.collection("users").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log(change.doc.data());
          console.log(change.doc.id);
          setEvents((prevState) => [
            ...prevState,
            { ...change.doc.data(), id: change.doc.id },
          ]);
        } else if (change.type === "removed") {
          setEvents((prevState) => {
            const stateCopy = [...prevState];
            const filteredArray = stateCopy.filter(
              (event) => event.id !== change.doc.id
            );
            return filteredArray;
          });
        } else if (change.type === "modified") {
          console.log(change.doc.data());
          setEvents((prevState) => {
            const stateCopy = [...prevState];
            const filteredArray = stateCopy.map((event) => {
              if (event.id === change.doc.id) {
                return { ...change.doc.data(), id: change.doc.id }
              } else {
                return event
              }
            });
            console.log(filteredArray);
            return filteredArray;
          });
          // setEvents([...change.doc.data(), id: change.doc.id ]),
        }
      });
    });
    }

  console.log(events);

  useEffect(() => {
    fetchData();
  }, []);
  const sortByCategoryAscending = (ascending) => {
    const compare = ( a, b ) => {
      if ( a.category < b.category ){
        return -1;
      }
      if ( a.category > b.category ){
        return 1;
      }
      return 0;
    }
    events.sort(compare);
    setEvents(events.slice());
  }

  const sortByCategoryDescending = (descending) => {
    const compare = ( a, b ) => {
      if ( a.category > b.category ){
        return -1;
      }
      if ( a.category < b.category ){
        return 1;
      }
      return 0;
    }
    events.sort(compare);
    setEvents(events.slice());
  }

  return (
    <div className="App">
      <h1>Events board</h1>
      <div>
      <button onClick={()=> setDisplay(!display)} style={{margin:'1rem'}}>{!display? "Add Event" : "Hide"} </button>
      {display&& <Eventform />}
      </div>
      <button onClick={() => sortByCategoryAscending (true)}
      style={{margin:'1rem'}}>
        Sort by category ascending
      </button>
      <button onClick={() => sortByCategoryDescending (false)}
       style={{margin:'1rem'}}>
        Sort by category descending
      </button>
      <Events events={events} />
    </div>
  );
};
export default Home;
