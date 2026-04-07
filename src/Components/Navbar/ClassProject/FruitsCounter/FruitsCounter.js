import React, { useState } from 'react'
//import "../ClassStyle.css";
import "./FruitsCount.css"

function FruitsCounter() {
    const [mango ,setmango] = useState(0);
    const [banana ,setBanana] = useState(0);

    const counter=()=>{
        setmango(pre=>pre =pre+1)
    }
    const count=()=>{
        setBanana(pre=>pre=pre+1)
    }

    const handlereset =()=>{
      setBanana(0)
      setmango(0)
    }

  return (

    <div>
      <div className='fruits'>
        <h2>Bob ate <span style={{color:"yellow"}}>{mango}</span> mangoes <span style={{color:"yellow"}}>{banana}</span> bananas</h2>
        <div className='images'>
        <img src="./images/Mango.png" alt="not found" />
        <img src="./images/Banana.png" alt="not found" />
         </div>
        <button onClick={counter}>Eat Mango</button>
        <button onClick={count}>Eat Banana</button>
        <div>
        <button onClick={handlereset}>Reset</button>
        </div>
       
      </div>
    </div>
  )
}

export default FruitsCounter
