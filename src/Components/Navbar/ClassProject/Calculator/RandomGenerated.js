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
      <h1>Random Number Generate</h1><br />
      <span>{numberval}</span>
      <button onClick={randomfunc}>Generate</button>
      
    </div>
  )
}

export default RandomGenerated
