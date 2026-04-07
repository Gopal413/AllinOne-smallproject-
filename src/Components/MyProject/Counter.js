import React, { useState } from 'react'
import "./Counter.css";

function Counter() {

    const [count , setCount] = useState(0);

    function increment(){
      
       setCount((prevalue)=>{
        console.log(prevalue+1)
        return prevalue+1;

       })
    }
    function decrement(){
      
        setCount((prevalue)=>{

        return prevalue-1;

       })
    }

  return (
    <div className="counter-card">
        <div>
            <h3>Counter App</h3>
            <p>{count}</p>
            
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={()=>setCount(prevalue=>(prevalue=0))}>Reset</button>
           
        </div>
      
    </div>
  )
}

export default Counter
