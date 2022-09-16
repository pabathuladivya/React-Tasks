import React, {Component} from "react";

class Stateclas extends React.Component{
  
       
   state = {
        name : "java script"
    }


    updatedName(){
        this.setState({name : "Reactjs"})
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.updatedName()}>Updated</button>
            </div>
        )
    }
}
export default Stateclas;