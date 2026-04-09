import React, {  useState } from 'react'
import "./LetterCount.css"

function LettersCalculator() {

    const [value ,setvalue] = useState("")
   
   
    
    const changeinput =(e)=>{
        const val = e.target.value;
        setvalue(val)
    
    }

  return (
    // <div className='letter'>
    //     <h2>Calculate the Letters you Enter</h2>
    //     <input type="text" placeholder='enter the please' value={value} onChange={changeinput}/>
    //     <button>No of Letters :{value.length}</button>
      
    // </div>
     <div className='letter'>
      <h2>Calculate the Letters you Enter</h2>
      <div className="input-group">
        <input 
          type="text" 
          placeholder='Enter text here...' 
          value={value} 
          onChange={changeinput}
        />
        <span className="input-glow"></span>
      </div>
      <button className="count-btn">
        <span className="ripple"></span>
        Letters: <span className="count">{value.length}</span>
      </button>
    </div>
  )
}

export default LettersCalculator
