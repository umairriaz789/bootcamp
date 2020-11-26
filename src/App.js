import React, {useState} from 'react';
import './App.css';
import msg from './msg.js';
export default function App() {
  let [count,setcount]=useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Name is Umair Riaz and I'm the Student of BS Computer Sciences.  </h1>
        <h2>My University name is UET Lahore.</h2>
        <br />
        <msg counter={count}/>
        <br />
        <button onClick={
          ()=> setcount(count + 1)
        }>
          update counter
        </button>
      </header>
    </div>
  );
}

