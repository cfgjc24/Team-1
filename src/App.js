import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './views/Student';
import Tutor from './views/Tutor';
import Login from './components/Login';
import Create from './components/Create';
import Home from './views/Home';


import './App.css';


function App() {
 return (
   <Router>
     <div className="app-container">
       <Routes>
         <Route path="/" element={<Home />} />  
         <Route path="/student" element={<Student />} />  
         <Route path="/tutor" element={<Tutor />} />  
         <Route path="/create" element={<Create />} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </div>
   </Router>
   
 );
 }


export default App;