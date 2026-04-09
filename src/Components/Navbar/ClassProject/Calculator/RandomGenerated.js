import React, { useState } from 'react'
//import "../ClassStyle.css";
import "./RandomGenerated.css"

function RandomGenerated() {

    const [numberval ,setnumberval] = useState(0)
    
    const randomfunc = ()=>{
        const ran = Math.floor((Math.random()*100)+1)
        console.log("random ",ran)
        setnumberval(ran)
        
    }

  return (
    
     <div className='random'>
      <h1>Random Number Generator</h1>
      <div className="number-display">
        <span className="number">{numberval}</span>
        <div className="number-glow"></div>
      </div>
      <button className="generate-btn" onClick={randomfunc}>
        <span className="ripple"></span>
        <span>Generate Magic</span>
        <div className="particles"></div>
      </button>
      </div>
  )
}

export default RandomGenerated
