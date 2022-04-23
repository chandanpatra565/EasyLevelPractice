import React from "react";
import '../App.css';

const Squre=(props)=>{
    return(
        <div className="squre">
            <div className="number">

                {props.Index}
            </div>
        </div>
    )
}
export default Squre;