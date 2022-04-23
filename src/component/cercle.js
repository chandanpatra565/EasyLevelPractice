import React from "react";
import '../App.css';

const Cercle=(props)=>{
    return(
        <div className="cercle">
            <div className="number">

                {props.Index}
            </div>
        </div>
    )
}
export default Cercle;