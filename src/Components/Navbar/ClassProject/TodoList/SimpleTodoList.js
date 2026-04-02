import React, { useState } from 'react'

function SimpleTodoList() {
    const [data,setdata] = useState([
        {para:"this is react js"},
        {para:"react is Library"},
        {para:"react is Library"},
        {para:"react is Library"},
        {para:"react is Library"},
        {para:"react is Library"}])
    //const data =

        const deletetoda=(id)=>{
            const val =(data.filter((_,i)=>i!==id))
            setdata(val)
        }
       
  return (
    <>
    <div style={{width:"100%",height:"100%",backgroundColor:"lightskyblue",textAlign:"center",margin:"10px", padding:"20px"}}>
        <h1>Simple Todos</h1>
     
        {data.map((value , ind)=>(
            <p key={ind} style={{fontSize:"25px"}} >{value.para}<button style={{marginLeft:"20px",fontSize:"18px"}} onClick={()=>deletetoda(ind)}>delete</button></p>
        ))}
    </div>
    </>
  )
}

export default SimpleTodoList
