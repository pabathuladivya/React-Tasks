import React from "react";
import { Link } from "react-router-dom";

const DynamicParams =()=>{

    let user =[
        {name :"react", id:123},
        {name :"JavaScript",id:145},
        {name :"Java",id:156},
        {name :"Sql",id:167},
    ]
    return(
        <>
        <h4>React dynamic routing</h4>
        {
            user.map((item)=>
            <div><Link to={"/user/"+item.id}>{item.name}</Link></div>)
        }
        </>
    )
}
export default DynamicParams;