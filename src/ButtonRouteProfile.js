import React from "react";
import { useNavigate } from 'react-router-dom'


const ButtonProfile =()=>{

    let navigate = useNavigate();

    return(
        <div>
            <div>place Orderd</div>
            <button onClick={()=>navigate('orderd-summary')}>place orderd</button>
        </div>
    )
}
export default ButtonProfile;