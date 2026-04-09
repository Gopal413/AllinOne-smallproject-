import React, { useState } from "react";
import "./Feedback.css"

function Feedback() {
  const [feed, setfeed] = useState();

  const emoji = ["😃", "😑","😡"];

 
  const result = emoji.map((value, index) => (
    <button key={index} onClick={() => setfeed(value)}>
      {value}
    </button>
  ));

  return (
    
    <div className="emoji-wrapper">
    <div className="emoji">
      {feed ? (
        <div>
          <button className="feed">{feed}</button>
          <p>Thank you</p>
          <button onClick={()=>setfeed(null)}>Return</button>
        </div>
      ) : (
        <div>
          <h2>How Satisfied are you with our Customer Support Performance?</h2>
          <div className="emoji">{result ? result : null}</div>
        </div>
      )}
    </div>
    </div>
   
  );
}

export default Feedback;
