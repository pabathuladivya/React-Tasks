import React from "react";

class Classprops extends React.Component{
    render(){
        return(
            <div>
            <h2>name:{this.props.name}</h2>
            <h3>year:{this.props.year}</h3>
            </div>
        )
    }
}
export default Classprops;