import React from "react";

class Conditional extends React.Component{

   constructor(){
    super()
    this.state = {
        isLoggedIn : false
    }
   }
    render(){
        // const isLoggedIn = true;
        // let message;
        // if (isLoggedIn){
        //    message = <div>welcome react learner</div>
        // }else{
        //     message = <div>welcome guest</div>  
        // }
        // return <div>welcome {isLoggedIn ? "react" : "guest"}</div>
        return (

            //using ternary
            this.state.isLoggedIn ?
            <div>welcome to react</div> : 
            <div>welcome to guest</div>
        )
    }
}
export default Conditional;