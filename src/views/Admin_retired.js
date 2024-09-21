import React from 'react';
import '../adminstuff/Sidebar.js';
import Sidebar from '../adminstuff/Sidebar.js';
import NavBar from '../adminstuff/NavBar.js';
import GraphBox from '../adminstuff/GraphBox.js';


//import Sidebar from './components/Sidebar';
//import MainContent from './components/MainContent';

function Admin() {
  return (
    <div className="dashboard-container">
      <Sidebar/>
      <NavBar/>
      <GraphBox/>
      
    </div>
  );
}

export default Admin;
