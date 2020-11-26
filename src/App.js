import React, {useState} from 'react';
import './App.css';
import {msg} from './msg.js';
import { useState } from 'react';
export default function App() {
  let [count,setcount]=useState(1)
  return (
    <div >
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

