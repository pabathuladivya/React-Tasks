import React, {component} from 'react';

// class App1 extends React.Component{
//     state = {
//         name : "React"
//     }
//     render(){
//         return(
//             <h1>welcome to {this.state.name}</h1>
//         )
//     }
// }
// export default App1;

// class App2 extends React.Component{
//     state = {
//         color : "red",
//         brand : "BMW",
//         year : 1982,
//     }
//     render(){
//         return(
//             <div>
//             color is {this.state.color},
//             {this.state.brand},
//             {this.state.year}
//             </div>
//         )
//     }
// }
// export default App2;

//set state 

class App3 extends React.Component{
    state = {
        id : 1,
        name : "react"
    }

    updateName =()=>{
        this.setState({name:"session"});
    }
    render(){
        return(
            <div>
            {this.state.id}
            {this.state.name}
            <button type="button" onClick={this.updateName}>change</button>
            {/* {this.updateName} */}
            </div>
        )
    }
}
export default App3;