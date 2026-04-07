
import "./ProjectComponent.css";

import Counter from "./MyProject/Counter";
import UserProfiles from "./Navbar/UserProfile/UserProfiles";
import RandomGenerated from "./Navbar/ClassProject/Calculator/RandomGenerated";
import LettersCalculator from "./Navbar/ClassProject/Calculator/LettersCalculator";
import CassWithdraw from "./Navbar/ClassProject/CashWithdraw/CassWithdraw";
import CountEvenAndOdd from "./Navbar/ClassProject/EvenOdd/CountEvenAndOdd";
import Speedometer from "./Navbar/ClassProject/Project/Speedometer";
import FruitsCounter from "./Navbar/ClassProject/FruitsCounter/FruitsCounter";
import SimpleTodoList from "./Navbar/ClassProject/TodoList/SimpleTodoList";
import GoogleSearch from "./Navbar/ClassProject/Serach/GoogleSearch";
import Feedback from "./Navbar/ClassProject/FeedBack/Feedback";


import React, { useState } from 'react';
import Clock from "./Navbar/ClassProject/Clock-useeffect/Clock";

const ProjectComponent = () => {
 
  const [activeTab, setActiveTab] = useState('Weather');
  const [theme , setTheme] = useState("Light");

  const switchfun = ()=>{
    setTheme(theme==="Dark"?"Light":"Dark")
  }

  const menuItems = [
    { id: 'Todo', component: <SimpleTodoList />, label: 'Tasks' },
    { id: 'Profile', component: <UserProfiles />, label: 'Profile' },
    { id: 'Counter', component: <Counter />, label: 'Counter' },
    { id: 'Clock', component: <Clock />, label: 'Clock' },
    { id: 'Stats', component: <CountEvenAndOdd />, label: 'EvenOdd' },
    { id: 'Speed', component: <Speedometer />, label: 'Speed' },
    { id: 'Finance', component: <CassWithdraw />, label: 'Withdraw' },
    { id: 'Search', component: <GoogleSearch />, label: 'Search' },
    { id: 'Feedback', component: <Feedback />, label: 'Feedback' },
    { id: 'FruitEat', component: <FruitsCounter />, label: 'FruitEat' },
    { id: 'lettercount', component: <LettersCalculator />, label: 'letterCounter' },
    { id: 'RandomNumber', component: <RandomGenerated />, label: 'RandomNumber' }
    
  ];

  return (
    <div className="app-container"  style={{backgroundColor:theme==="Light" ?"white":"#1e1e1e"}}>

      <nav className="top-nav" >
        <div className="nav-scroll" >
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
              style={{backgroundColor:theme==="Light" ?"#1e1e1e":"white"}}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

    
      <main className="display-area">
        <div className="component-window" >
          {menuItems.find((item) => item.id === activeTab)?.component}
        </div>
      </main>
      
    
      <div className="floating-theme">
        <button onClick={()=>switchfun()}>{theme}</button>
      </div>
    </div>
  );
};

export default ProjectComponent;