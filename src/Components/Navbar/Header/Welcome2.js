import React from 'react'
import Welcome from '../../Welcome';

function WeatherApi() {

  let obj2 ={
    fname :"gopal",
    lname : "qrst"
  };
  let array =["abcd","xyz","112","5452"];

  return (
    <div>
       <h2>welcome to react js start</h2>
      <Welcome names="abcd" greeting="good night" age ={25} obj ={obj2} items ={array}/>
    </div>
  )
}

export default WeatherApi