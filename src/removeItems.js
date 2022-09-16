import React from "react";


const RemoveItems=()=>{


    const fruits = [
        {name : "Apple,"},
        {name : "Kiwi,"},
        {name : "mango,"},
        {name : "oranges,"},
        {name : "grapes,"}
    ]
 
    return(
        <div>
            {fruits.map(x=>
                x.name)}
        </div>
    )
}
export default RemoveItems;