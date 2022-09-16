import React from "react";


// class PracticeCls extends React.Component{

//     state = {name : "reactddddd"} 
//     render(){
//         return(
//             <div>
//             {this.state.name}
//             <button onClick={()=> this.setState({name : "react session"})}>click</button>
//             </div>

//         )
//     }
// }
// export default PracticeCls;


class PractCount extends React.Component{
    state = {count : 0}
    render(){
        return(
            <div>
                {this.state.count}
                <button onClick={()=>this.setState +1}>Counter</button>
            </div>
        )
    }
}
export default PractCount;