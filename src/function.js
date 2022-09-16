import React,{useEffect, useState} from "react";

// const Function =()=>{
//     const [name,setName] = useState("react session")
//     return(
//         <div>
//         <h1>welcome to {name}</h1>
//         <button onClick={()=>setName("learning")}>change</button>
//         </div>
        
//     )
// }
// export default Function;


//spread operator

// const Spread =()=>{
//     const one =[1,2,3,4,5]
//     const two =[...one,6,7,8]

//     console.log(two);

//     return(
//         <></>
//     )
// }
// export default Spread;

//object destructuring

// const Destructure =()=>{
//    const values = {name : "shika",age:15};

//      const {name,age}=values;
//      console.log(name)

//      return (
//         <></>
//      )

// }
// export default Destructure;



//Hooks

// const Usehooks =()=>{
//     const [timer,setTimer] = useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setTimer(()=>timer +1);
//         },1000);
//     });

//     return(
//         <h1>have rendered {timer}</h1>
//     )
// }
// export default Usehooks;


//date methods in react

class Datemethods extends React.Component{
    constructor(){
        super()
        var date = new Date(),
        time = date.getHours()+ ':' +date.getMinutes()+ ':' +date.getSeconds();

        this.state = {
            currentTime : time
        }
    }

    render(){
        return(
            <div>
                <p>
                    {this.state.currentTime}
                </p>
            </div>
        );
    }
    
}
export default Datemethods;

