


import React from "react";
import { useNavigate ,Link} from 'react-router-dom'


const OrderdSummary =()=>{

    // let navigate = useNavigate();

  
    return(
        <div>
            <div>Orderd confirmed</div>
            <Link to="/home">


            <button>go back</button></Link> 
        </div>
    )
}
export default OrderdSummary;