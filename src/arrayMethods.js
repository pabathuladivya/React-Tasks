import React from "react";

const Array =()=>{
    const arr = ["react","java","sql","js"]

    return(
        <div>
            {
                arr.map(
                    (value,index) => <li>{value}</li>
                )
            }
        </div>
    )
}
export default Array;



// const Route =()=>{    
//     return(
//         <div>
//             <ul>
//                 <li>Home</li>
//                 <li>Dashboard</li>
//                 <li>About</li>
//             </ul>
//         </div>
//     )
// }


