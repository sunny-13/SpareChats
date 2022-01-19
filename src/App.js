import "./App.css";
import React,{useState,useEffect} from "react";
import {  FormControl ,Input} from "@mui/material";
import Message from "./Message";
import {db} from './backend/firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import icon from '../src/group-chat.png'
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function App() {
  
  
  const [input,setInput]= useState('');
  const [messages,setMessages]= useState([]);
  const [username,setUsername] =useState("");

  const clicked = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      text:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id,message: doc.data()})))
    });
  },[])

  useEffect(()=>{
    setUsername(prompt("enter your username"));
  },[])


  return (
    <div className="App">
      <img src={icon} width="80" height="80"/>
      <h2>Welcome {username} !</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="Enter a Message !" value={input} onChange={(e)=> setInput(e.target.value)}/>
          <IconButton classname="app_button" variant="contained" type='submit' disabled={!input} onClick={clicked}>
          <SendIcon color="primary"/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
      {
          messages.map(({id,message})=>(
             <Message key={id} username={username} message={message} /> 
          ))

      }
      </FlipMove>
    </div>
  );
}

export default App;
