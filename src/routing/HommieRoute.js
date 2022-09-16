import React from "react";
import { useNavigate } from 'react-router-dom';



const Hommie =()=>{

    let navigate = useNavigate();
    const navigatehfgG =()=>{
        navigate('/about')
    }
    return(
        <>
        <h3>welcome to home page</h3>
        <button type="submit" onClick={navigatehfgG}>Login</button>
        {/* <button>login</button> */}
        </>
    )
}
export default Hommie;