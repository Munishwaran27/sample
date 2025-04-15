import React from "react";
import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div className="Counter">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Subtract</button>
            <button onClick={()=>setCount(0)}>RESET</button>
        </div>
    )
}
export default Counter;