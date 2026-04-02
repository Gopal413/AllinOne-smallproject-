import React, { useState } from 'react'

function HideComponent() {
    const [show,setSow] =useState(true);
    const [Hide,setHide] =useState(true);

    const showfun=()=>{
        setSow(prev=>prev=!prev)
    }

    const hidefun=()=>{
        setHide(pre=>pre=!pre)
    }

  return (
    <div className='hide'>
        <div>
            <button onClick={showfun}>Show/Hide</button>
            {show?<div className='hideshow'><p>John</p></div>:null}
        </div>
        <div>
            <button onClick={hidefun}>Show/Hide</button>
            {Hide?<div className='hideshow'><p>smith</p></div>:null}
        </div>
      
    </div>
  )
}

export default HideComponent
