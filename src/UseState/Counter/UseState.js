import React from "react";
import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Sub</button>
        </div>
    )
}
export default Counter;