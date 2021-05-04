import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA5HKCr2TrGG51VAeXj_UipQWCzAwIVq0o",
  authDomain: "chat-app-74abb.firebaseapp.com",
  projectId: "chat-app-74abb",
  storageBucket: "chat-app-74abb.appspot.com",
  messagingSenderId: "513497284234",
  appId: "1:513497284234:web:88569f142c08ade8417773",
  measurementId: "G-3H9PL55JJ1"
})

const auth= firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>heyyyyyuuuuuuuuuu</h1>
      </header>
      <section>
        { user ? <Chatroom/> : <Signin/> }
      </section>
    </div>
  );
}

function Signin(){
  const signinwithgoogle = () =>{
    const provider= new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signinwithgoogle}> Sign in with google</button>
  )
}

function signout(){
  return auth.currentUser && (
    <button onClick={() => auth.signout}>Sign Out</button>
  )
}


function Chatroom() { 

  const messagesref= firestore.collection('messages');
  const query = messagesref.orderBy('createdAt').limit(30);

  const [messages] = useCollectionData(query, {idField : 'id'});

  return (
    <>
    <div>
      {messages && messages.map( msg => <Chatmessage key={msg.id} message={msg} />)}
    </div>
    </>
  )
}

function Chatmessage(props){

  const {text, uid} = props.message;

  return (<p>{text}</p>)
}

export default App;
