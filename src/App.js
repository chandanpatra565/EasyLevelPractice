

import React, { useState } from 'react';
import './App.css';
import Cercle from './component/cercle';
import Squre from './component/squre';
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
      <select onChange={SelectShape} id="shape-creator">
        <option value="cercle">cercle</option>
        <option value="squre" selected>Squre</option>
      </select>
      <input type="button" value="Add shape" onClick={Submit}></input>
      
        <div id="shapes-holder">

          {
            showShape.map((element,index)=>{
              if(element==="cercle"){
                return <Cercle key={index} Index={index}>{index}</Cercle>
              }
              if(element==="squre"){
                return <Squre key={index} Index={index}></Squre>
              }
            })
          }
        </div>

       

      
    </>
  );
}

export default App;
