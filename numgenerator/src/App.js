import React from 'react'
import { useState } from 'react'
import "./App.css"

function App() {
    const [number,setNumber]=useState(0);

     const randomNumber=()=>{
        const newRandomNumber=Math.ceil(Math.random()*100);
        setNumber(newRandomNumber)
    }

  return (
    <div className='main-container'>
    <div className='number-container'>
        <h1 className='heading'>Random Number</h1>
        <p className='description'>Generate a random number in the range of 0 to 100</p>
        <button type="button"
        className='btn'
        onClick={randomNumber}>Generate</button>
        <p className='number'>{number}</p>
    </div>
      
    </div>
  )
}

export default App
