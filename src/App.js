import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';
 

const App = ()=>{
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
return (
 <NoteState>
  <Router>
     <Navbar/>
     <Alert alert={alert} />
   <Routes>
    <Route path="/" element={<Home showAlert={showAlert}/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login showAlert={showAlert}/>} />
    <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
   </Routes>
  </Router>  
  </NoteState>
)
}

export default App;
