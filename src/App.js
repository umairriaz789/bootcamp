import React, {useState} from 'react';
import './App.css';
import {msg} from './msg.js';
import { useState } from 'react';
function App() {
  let [count,setcount]=useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Name is Umair Riaz and I'm the Student of BS Computer Sciences.  </h1>
        <h2>My University name is UET Lahore.</h2>
        <br />
        <msg />
        <br />
        <button onclick={
          ()=> setcount(++count)
        }>
          update counter
        </button>


   
      </header>
    </div>
  );
}

export default App;
