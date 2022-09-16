import React, { useState } from "react";

const Cartexamp =()=>{
    const [count,setCount] = useState([]);
    const [total,setTotal] = useState(0);

    function add (){
        setCount(['Ice cream']);
        setTotal(5);
    }

    return(
        <div>
            <h3>cart : {count}</h3>
            <h4>total : {total}</h4>
            <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
            <button onClick={()=>add()}>Add</button>
        </div>
    )
}
export default Cartexamp;