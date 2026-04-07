// import React from 'react'
// import './HeaderEx.css'


// function HeaderEx(props) {
//     const {users} = props;
//     const id = users.unitNo;
    
//     console.log("id :",id)
//   return (
//     <li>
      
//     <div className='display'>

//         <img src={users.imageUrl} alt="" />
//         <div>
//             <h2>{id}</h2>
//             <h1>{users.name}</h1>
//             <p>{users.role}</p>
            
//         </div>
//     </div>

//     </li>
//   )
// }

// export default HeaderEx

import React from "react";
import "./HeaderEx.css";

function HeaderEx(props) {
  const { users } = props;
  const id = users.unitNo;

  return (
    <li>
      <div className="display">
        <div className="user-card__avatar">
          <img src={users.imageUrl} alt={users.name} />
        </div>

        <div className="user-card__info">
          <span className="user-card__tag">ID #{id}</span>
          <h1 className="user-card__name">{users.name}</h1>
          <p className="user-card__role">{users.role}</p>
        </div>
      </div>
    </li>
  );
}

export default HeaderEx;