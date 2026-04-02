import React, { useState } from 'react'
import "./Style.css"

function CountEvenAndOdd() {

    const [EvenNum,setEvenNum] = useState(0)
    const [OddNum,setOddNum] = useState(1)

    const changeIncre =()=>{
      
        setEvenNum(pre=>pre= (EvenNum<100?EvenNum+2:(setEvenNum(0),alert("not over the 100"))));
        
    }
    const changeIncreodd =()=>{
      
        setOddNum(pre=>pre= (OddNum<100?OddNum+2:(setOddNum(1),alert("not over the 100"))));
    }

    const changedecre =()=>{
      
        setEvenNum(pre=>pre= (EvenNum>0?EvenNum-2:(setEvenNum(0),alert("not over the 0"))));
        
    }
    const changedecreodd =()=>{
     
        setOddNum(pre=>pre= (OddNum>0?OddNum-2:(setOddNum(1),alert("not over the 0"))));
    }

  return (
    <>
    <div className='evenodd'>
    <div className='evenhandle'>
        <h2>Number Count in Even</h2>
        <h3>Count  {EvenNum}</h3>
        <p>Count is Even</p>
        <button onClick={changeIncre}>Increment</button>
        <button onClick={changedecre}>Decrement</button>
        <p>Increment By Random Number Between 0 to 100</p>

    </div>
    <div className='oddhandle'>
        <h2>Number Count in Odd</h2>
        <h3>Count  {OddNum}</h3>
        <p>Count is Odd</p>
        <button onClick={changeIncreodd}>Increment</button>
        <button onClick={changedecreodd}>Decrement</button>
        <p>Increment By Random Number Between 0 to 100</p>

    </div>
    </div>
    </>
  )
}

export default CountEvenAndOdd

// import React, { useState } from 'react';
// import './ClassStyle.css';

// function CountEvenAndOdd() {
//   const [evenNum, setEvenNum] = useState(0);
//   const [oddNum, setOddNum] = useState(1);

//   // Logic Cleaned up for readability
//   const handleEven = (delta) => {
//     const next = evenNum + delta;
//     if (next > 100 || next < 0) {
//       alert(next > 100 ? "Cannot exceed 100" : "Cannot go below 0");
//       setEvenNum(0);
//     } else {
//       setEvenNum(next);
//     }
//   };

//   const handleOdd = (delta) => {
//     const next = oddNum + delta;
//     if (next > 100 || next < 0) {
//       alert(next > 100 ? "Cannot exceed 100" : "Cannot go below 0");
//       setOddNum(1);
//     } else {
//       setOddNum(next);
//     }
//   };

//   return (
//     <div className="counter-container">
//       {/* Even Section */}
//       <div className="counter-card even-card">
//         <div className="card-header">
//           <h2>Even Counter</h2>
//           <span className="badge">Step: 2</span>
//         </div>
//         <div className="number-display">{evenNum}</div>
//         <p className="status-text">Currently an Even Number</p>
//         <div className="button-group">
//           <button className="btn btn-inc" onClick={() => handleEven(2)}>Increment</button>
//           <button className="btn btn-dec" onClick={() => handleEven(-2)}>Decrement</button>
//         </div>
//       </div>

//       {/* Odd Section */}
//       <div className="counter-card odd-card">
//         <div className="card-header">
//           <h2>Odd Counter</h2>
//           <span className="badge">Step: 2</span>
//         </div>
//         <div className="number-display">{oddNum}</div>
//         <p className="status-text">Currently an Odd Number</p>
//         <div className="button-group">
//           <button className="btn btn-inc" onClick={() => handleOdd(2)}>Increment</button>
//           <button className="btn btn-dec" onClick={() => handleOdd(-2)}>Decrement</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CountEvenAndOdd;