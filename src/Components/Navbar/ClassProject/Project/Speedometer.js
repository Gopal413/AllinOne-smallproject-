import React, { useState } from 'react'
//import "../ClassStyle.css";
import "./Speedometer.css"

function Speedometer() {
    const [speed,setSpeed] = useState(0);

    const speedincrement =()=>{
       
        (speed>=200?alert("over the 200"):setSpeed(pre=>pre+10))
    }

    const speeddecrement =()=>{
       (speed===0?alert("Zero mph"):setSpeed(pre=>pre-10))
    }

  return (
    <div className='speed'>
      <h1>SPEEDOMETER</h1>
      <img src="./images/Speedometer.png" alt="not found" />
      <h3>Speed is {speed}mph</h3>
      <p>Min Limit is 0mph, max Limit is 200mph</p>
      <div className='btns'>
      <button onClick={speedincrement}>Accelerate</button>
      <button onClick={speeddecrement}>Apply Brake</button>
      </div>
    </div>
  )
}

export default Speedometer
