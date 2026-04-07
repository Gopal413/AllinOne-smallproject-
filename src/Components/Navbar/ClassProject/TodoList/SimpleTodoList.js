import React, { useState } from 'react'
import "./SimpleTodolist.css"

function SimpleTodoList() {
    const [data,setdata] = useState([
        {para:"This is react js"},
        {para:"React is Library"},
        {para:"Redux is Library"},
        {para:"ReduxToolkit is Library"},
        {para:"Node Js is Backend"},
        {para:"MongoDB is Database"}])
    //const data =

        const deletetoda=(id)=>{
            const val =(data.filter((_,i)=>i!==id))
            setdata(val)
        }
       
  return (
    <>
    <div className="simple-todo">
        <h1>Simple Todos</h1>
     
        {data.map((value , ind)=>(
            <p key={ind}  >{value.para}<button  onClick={()=>deletetoda(ind)}>delete</button></p>
        ))}
    </div>
    </>
  )
}

export default SimpleTodoList
