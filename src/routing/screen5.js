import React from "react";
import {Link, Outlet } from "react-router-dom";

const Screen5 =()=>{
    return(
        <>
        <nav>
            
        <Link to="Stateclas"><li>examp1</li></Link>
            <Link to="StateFunc"><li>examp2</li></Link>
            <Outlet/>
        </nav>
        
        </>
    )
}
export default Screen5;