import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import db from '../../firebaseConfig'

export default function MessagesList() {
    const [header, setHeader] = useState ("");
    const [name, setName] = useState("");
    const [value, onChange] = useState(new Date());
    const [event, setEvent] = useState("");
    const [description, setDescription] = useState("");
    const [collaborators, setCollaborators] = useState("");
    const [completed, setCompleted] = useState(false);

    

    const fetchData = async() => {
        const res = await db.collection('demo').doc('header').get()
        const data = res.data()
        setHeader (data.title)
    }

    const addUser = e => { 
        e.preventDefault()
        db.collection('users').doc().set({
            fullName: name,
            chooseDate: value,
            addEvent: event,
            addDescription: description,
            addCollaborators: collaborators,
            chooseCompleted: completed
        })
        setName("")
        onChange(new Date())
        setEvent("")
        setDescription("")
        setCollaborators("")
        setCompleted(false)
        }

        useEffect (() => {
            fetchData()
        },[])

    return (
        <div>
            <h1>{header}</h1>
            <form onSubmit={addUser}>
               
        
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Full name" onChange={e => setName(e.target.value)}
                        value={name}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Due date:
                    <DatePicker 
                        onChange={onChange}
                        value={value}
                    />
                    </label>
                </div>
                <div>
                    <label>
                        Event name:
                        <input type="text" name="event" placeholder="Event name" onChange={e => setEvent(e.target.value)}
                        value={event}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Event description:
                        <input type="text" name="description" placeholder="Event description" onChange={e => setDescription(e.target.value)}
                        value={description}/>
                    </label>
                </div>
                <div>
                    <label>
                        Collaborators:
                        <input type="text" name="collaborators" placeholder="Persons collaborating" onChange={e => setCollaborators(e.target.value)}
                        value={collaborators}
                        />
                    </label>
                </div>
                <div>
                    <div>
                        <input type="radio" name="radiobutton" onChange={(e)=>setCompleted(e.target.value)} value={completed} checked={null}/>
                        <label> Completed </label>
                    </div>
                    <div>
                        <input type="radio" name="radiobutton" value="Not Completed" onChange={(e)=> setCompleted(e.target.value)}/>
                        <label> Not Completed </label> 
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>

        </div>
    )
}

// export default MessagesList