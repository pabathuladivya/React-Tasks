import React from "react";


const Ternary =()=>{

    const users =[
        {name: "react"},
        {name: "java"},
        {name: "java script"},
        {name: "html"}
    ];

    //the condition
    const showlist = true;

    return(
        <div>
            {
                showlist ? (
                    <div>
                        <h5>available users</h5>
                        <ul>
                            {users.map(users=><li>{users.name}</li>)}
                        </ul>
                    </div>
                ) : (
                    <p>no users</p>
                )
            }
        </div>
    )
}
export default Ternary;