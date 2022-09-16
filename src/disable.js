import React, { useState } from "react";


const Disabled =()=>{
    const [disable,setDisable] = useState(false)
    return(
        <button disabled={disable} onClick={()=>setDisable(true)}>click</button>
    )
}
export default Disabled;