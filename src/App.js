// import React from "react";
// import UseStateExample from "./UseState/UseStateExample";
// // import Calculation from "./props/calculation";
// // import PropsExample from './props/propsExample';
// // import SecondpropsExample from "./props/secondpropsExample";
// // import Component  from "react";
// // let number1=10
// // let number2=10

// function App(){
 
//   return(
//   <div>
//     {/* <Calculation number1={10} number2={10} Add={number1+number2} sub={number1-number2} multiple={number1*number2} division={number2!==0 ? number1/number2 :"Can not div by Zero"}/> */}
//     {/* <PropsExample username="santhosh" age={23} gender="male"/>
//     <SecondpropsExample username="sandy" age={22} gender="male"/> */}
//     {/* <Component/> */}
//     <UseStateExample/>
//   </div>
//   )
// }
// export default App;
import React from 'react'
// import UseStateExample from './UseState/UseStateExample'
import Counter from './Counter/UseState';
import './Counter/counter.css';
function App(){
  return (
    <div>
    {/* <UseStateExample/> */}
    <Counter/>
    </div>
  )
}
export default App;