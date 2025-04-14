import React from "react";

function PropsExample(props){
    return(
        <div>
            
            <h1>Username:{props.username}</h1>
            <h1>Age:{props.age}</h1>
            <h1>Gender:{props.gender}</h1>
        </div>

    )
}
export default PropsExample