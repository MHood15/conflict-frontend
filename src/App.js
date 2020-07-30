import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './Map';


function App() {

    return (
      
      <div className="App">

        <div id="header">
          <h1>Global Conflict Tracker</h1>
          <h5>Part of the 2020 Disaster Tracker Series</h5>
        </div>
        <div>
          <Map />
        </div>

      </div>
    )

}

export default App;

//
