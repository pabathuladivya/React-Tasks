import React from "react";

const Relation =()=>{
    const name = {name:"jessy",age:16,}
    return(
        <>
        <Parent1 state={name.name+","+name.age}/>
        </>
    
    )
}

const Parent1 =(props)=>{
    return(
        <Parent2 data={props.state}/>
    
    )
}
const Parent2 =(props)=>{
    return(
        <>{props.data}</>
    )
}
export default Relation;