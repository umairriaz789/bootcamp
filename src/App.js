import React, {useState} from 'react';
import './App.css';
import {msg} from './msg.js';
export default function App() {
  let [count,setcount]=useState(1)
  return (
    <div className="App">
        <msg counter={count}/>
        <br />
        <button onclick={
          ()=> setcount(++count)
        }>
          update counter
        </button>
    </div>
  );
}

