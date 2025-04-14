import React from "react";

function Calculation(props){
   

    return(
        <div>
            <h1>Calculator</h1>
             <h1>Number1:{props.number1}</h1>
            <h1>Number2:{props.number2}</h1>
            <h1>Add:{props.Add} </h1>
            <h1>sub:{props.sub} </h1>
            <h1>multiple:{props.multiple} </h1>
            <h1>division:{props.division} </h1>
            
        </div>

    )
}
export default Calculation