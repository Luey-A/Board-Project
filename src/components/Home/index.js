import React, { useEffect, useState } from "react";
import Eventform from "../Eventform";
import Events from "../Events";
import db from "../../firebaseConfig";

const Home = () => {
  const [events, setEvents] = useState([]);

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
            const filteredArray = stateCopy.map((event) => { if (event.id === change.doc.id) {
              return event = { ...change.doc.data(), id: change.doc.id }
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

  return (
    <div className="App">
      <h1>Events board</h1>

      <Eventform />
      <Events events={events} />
    </div>
  );
};
export default Home;
