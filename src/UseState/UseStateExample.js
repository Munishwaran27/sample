import React, { useState } from "react";

function UseStateExample(){
    const[number,SetNumber]=useState(1);
    function handleAdd(){
        SetNumber((c)=> c+1);
    }
    function handleSubtract(){
        if(number>0)
        SetNumber((c)=> c-1);
    }

return(
    <center>
        <div>
            <h1>Use State Example</h1>
            <p>{number}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Sub</button>

        </div>
        </center>
)
}
  export default  UseStateExample
