import './admin.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Graph from '../components/Graph.js'; 

function GraphBox() {
  return (
    <div style={{height:'100%', width: '100%'}}> 
    <div class="graphbar1">
        <Graph/>
    </div> 
        <div class="graphbar1">
            <Graph/>
        </div> 
    </div>
  );
}

export default GraphBox;