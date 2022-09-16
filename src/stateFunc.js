import React, { useState } from "react";

const StateFunc =()=>{
    const [name,setName] = useState("react");
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    // const [time,setTime] = useState(0);

    return(
        <div>
        <h1>{name}</h1>
        <h2>{count}</h2>
        <h3>{count1}</h3>
        {/* <h4>{time}</h4> */}
        <button onClick={()=>setName("welcome to react")}>change</button>
        <button onClick={()=>setCount(count + 1)}>Count</button>
        <button onClick={()=>setCount1(count1 - 1)}>decrement</button>
        {/* <button onClick={()=>setTime(time + newDate())}>Date</button> */}
        </div>
    )
}
export default StateFunc;