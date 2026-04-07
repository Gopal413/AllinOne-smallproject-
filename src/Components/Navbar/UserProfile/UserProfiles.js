
// import { useState } from "react"
// import HeaderEx from "../Header/HeaderEx"
// import "./UserProfiles.css"



// function UserProfiles() {
//   const [inpserach, setinpsearch] = useState("");

// const changeinput =(e)=>{
//   setinpsearch(e.target.value)
// } 

//   const user =[{
//     unitNo:1,
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
//     name:"akshay",
//     role:"Senior Developer"
//   },
//   {
//     unitNo:2,
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
//     name:"sachin",
//     role:"junior Developer"
//   },
//   {
//     unitNo:3,
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
//     name:"tiger",
//     role:"Testing"
//   },
//   {
//     unitNo:4,
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
//     name:"ritik",
//     role:"Manager"
//   }
// ]

//   const [inputvalue] =useState(user)

//   const searchresult =inputvalue.filter(prev=>prev.name.toLowerCase().includes(inpserach.toLowerCase()))

//   return (
//     // <div>
//     //   <input type="text" value={inpserach} onChange={changeinput} />
  

//     //   {searchresult.map((eachitem)=>(
//     //     <HeaderEx users ={eachitem}
//     //     key={eachitem.unitNo}/>
//     //   ))}
     
      
//     // </div>
//     // UserProfiles.jsx

//   <div className="user-profiles">
//     <input
//       className="user-profiles__search"
//       type="text"
//       value={inpserach}
//       onChange={changeinput}
//       placeholder="Search by name..."
//     />

//     <div className="user-profiles__list">
//       {searchresult.map(eachitem => (
//         <HeaderEx users={eachitem} key={eachitem.unitNo} />
//       ))}
//     </div>
//   </div>
//   )
// }

// export default UserProfiles

import { useState } from "react";
import HeaderEx from "../Header/HeaderEx";
import "./UserProfiles.css";

function UserProfiles() {
  const [inpserach, setinpsearch] = useState("");

  const changeinput = (e) => {
    setinpsearch(e.target.value);
  };

  const user = [
    {
      unitNo: 1,
      imageUrl:
        "https://www.shutterstock.com/image-photo/portrait-smiling-woman-manager-working-600w-2272550999.jpg",
      name: "Nikhita",
      role: "Senior Developer",
    },
    {
      unitNo: 2,
      imageUrl:
        "https://www.shutterstock.com/image-photo/young-adult-man-glasses-works-600w-2611319043.jpg",
      name: "Sachin",
      role: "Junior Developer",
    },
    {
      unitNo: 3,
      imageUrl:
        "https://www.shutterstock.com/image-photo/40s-mid-age-european-business-600w-2343004281.jpg",
      name: "Pooja",
      role: "Testing",
    },
    {
      unitNo: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
      name: "Ritika",
      role: "Manager",
    },
  ];

  const [inputvalue] = useState(user);

  const searchresult = inputvalue.filter((prev) =>
    prev.name.toLowerCase().includes(inpserach.toLowerCase())
  );

  return (
    <div className="user-profiles">
      <input
        type="text"
        value={inpserach}
        onChange={changeinput}
        className="user-profiles__search"
        placeholder="Search user by name..."
      />

      <ul className="user-profiles__list">
        {searchresult.map((eachitem) => (
          <HeaderEx users={eachitem} key={eachitem.unitNo} />
        ))}
      </ul>
    </div>
  );
}

export default UserProfiles;