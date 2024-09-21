import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './views/Student';
import Admin from './views/Admin';
import Tutor from './views/Tutor';
import Login from './components/Login';
import Create from './components/Create';
import Home from './views/Home';
import Menu from './views/Menu';
import NavBar from './components/NavBarLandingPage';

import AdminDashboard from './components/Admin_Dashboard';
import AdminStudent from './components/Admin_Student';
import AdminAlum from './components/Admin_Alum';
import AdminTutor from './components/Admin_Tutor';

import './App.css';


function App() {
 return (
   <Router>
     <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/student" element={<Student />} />  
          <Route path="/admin" element={<Admin />} />  
          <Route path="/tutor" element={<Tutor />} />  
          <Route path="/menu" element={<Menu />} />  
          <Route path="/admin" element={<Admin />} />  
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />


          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/student" element={<AdminStudent />} />
          <Route path="/admin/alum" element={<AdminAlum />} />
          <Route path="/admin/tutor" element={<AdminTutor />} />

       </Routes>
     </div>
   </Router>
   
 );
 }


export default App;