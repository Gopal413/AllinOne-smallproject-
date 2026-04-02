import React from 'react'
import './HeaderEx.css'


function HeaderEx(props) {
    const {users} = props;
    const id = users.unitNo;
    
    console.log("id :",id)
  return (
    <li>
      
    <div className='display'>

        <img src={users.imageUrl} alt="" />
        <div>
            <h2>{id}</h2>
            <h1>{users.name}</h1>
            <p>{users.role}</p>
            
        </div>
    </div>

    </li>
  )
}

export default HeaderEx
