import React, { useState } from "react";


// const PracticeFun =()=>{

//     const [name,setName] = useState("java script")
//     return(
//         <div>
//             {name}
//             <button onClick={()=> setName("react")}>click</button>
//         </div>
//     )
// }
// export default PracticeFun;

const PracticeCount =()=>{
     
    const [count,setCount] = useState(0)

    return(
        <div>
            {count}
            <button onClick={()=>setCount(count + 1)}>Count</button>
        </div>
    )
}
export default PracticeCount;