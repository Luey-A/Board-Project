import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import firebase from './firebase'
// eslint-disable-next-line no-unused-vars
import MessagesList from './messages-list'
// firebase.firestore().collection('users').add({
//   title: 'Ola',
//   messsages: 2
// })

function App() {

  return (
    <div className="App">
      <h1> Make friendship board</h1>
      <MessagesList/>
    </div>
  );
}

export default App;
