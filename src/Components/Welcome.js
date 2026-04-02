import React from 'react'


export default function Welcome(props) {


  const{names,greeting,obj,age,items}=props;//destructure 

  

  console.log("welcome")
  return (
    <div>
      <h1>welcome to welcome props {names}</h1>
      <h1>welcome to welcome props {greeting}</h1>
      <h1>welcome to welcome props {age}</h1>
        <p>{obj.lname}</p>
      <ul>
      {items.map((val,index)=>{
        return <li key={index}>{val}</li>
      })}
      </ul>
      <p>{obj.fname}</p>
      
    
    </div>
  )
}



