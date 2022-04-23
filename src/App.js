

import React, { useState } from 'react';
import './App.css';
import circle from './component/cercle';
import square from './component/squre';
function App() {
  const [shape,updateshape]=useState("squre");
  const [showShape,updateshowShape]=useState([]);
  const SelectShape=(event)=>{
    updateshape(event.target.value);
  }
  const Submit=()=>{
    
    updateshowShape((privious)=>{
      return [...privious,shape];
    })
  }
  return (
    <>
    <div id="shape-creator">
      <select onChange={SelectShape} id="shape-creator">
        <option value="cercle">cercle</option>
        <option value="squre" selected>Squre</option>
      </select>
    </div>
      <input type="button" value="Add shape" onClick={Submit}></input>
      
        <div id="shapes-holder">

          {
            showShape.map((element,index)=>{
              if(element==="cercle"){
                return <circle key={index} Index={index}>{index}</circle>
              }
              if(element==="squre"){
                return <square key={index} Index={index}></square>
              }
            })
          }
        </div>

       

      
    </>
  );
}

export default App;
