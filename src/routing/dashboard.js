import React from "react";

const Dashboard =({match})=>{
    return(
        <h4>Welcome to Dashboard :{match.params.fullname} </h4>
    )
}
export default Dashboard;