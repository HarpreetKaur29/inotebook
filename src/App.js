import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
 

const App = ()=>{
return (
 <NoteState>
  <Router>
     <Navbar/>
   <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    
   </Routes>
  </Router>  
  </NoteState>
)
}

export default App;
