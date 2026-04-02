import React, { useState } from 'react'

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
    <div>
        <div style={{border:"2px" ,backgroundColor:"lightblue",width: "90%",height:"200px",margin:"20px", textAlign:"center" ,bottom:"50px"}}>
            <h3 style={{color:"violet",fontSize:"30px"}}>Counter App</h3>
            <p style={{fontSize:"30px",color:"red"}} >{count}</p>
            
            <button style={{padding:"5px", margin:"5px"}} onClick={increment}>Increment</button>
            <button style={{padding:"5px", margin:"5px"}} onClick={decrement}>Decrement</button>
            <button style={{padding:"5px", margin:"5px"}} onClick={()=>setCount(prevalue=>(prevalue=0))}>Reset</button>
           
        </div>
      
    </div>
  )
}

export default Counter
