import React, { useState } from "react";


// const Validations =()=>{

//     const [data,setData] = useState({
//         name : "",
//         email : "",
//         password : "",
//         confirmpassword : "",
//     })

 

//     const handleChange = (e)=>{
//         const {name,value} = e.target;
//         setData({...data,[name]:value})
//     }

//     const submitHandler =(e)=>{
//         e.preventDefault();
//         console.log(data)
//         // if(password  === confirmpassword)
//         // {
//         // console.log(data)
//         // }else {
//         //     console.log("passwords are not matching")   
//         // }
//     }

//     return(
//         <div>
//            name : <input type="text" name="name" onChange={handleChange}/><br/>
//            email : <input type="email" name="email" onChange={handleChange}/><br/>
//         password : <input type="password" name="password" onChange={handleChange}/><br/>
//            confirmpassword : <input type="password" name="confirmpassword" onChange={handleChange}/><br/>
//            <button onClick={submitHandler}>submit</button>
//         </div>
//     )
// }

// export default Validations;


const Validate = ()=>{

    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmpassword : "",
    })

    const {name,email,password,confirmpassword} = data;

    const handleChange =(e)=>{
        
    }
    return(
        <div>
            name : <input type="text" name="name" value={name} /><br/>
            email : <input type="email" name="email" value={email} /><br/>
            password : <input type="password" name="password" value={password} /><br/>
            confirmpassword : <input type="password" name="password" value={confirmpassword} /><br/>
            <button>submit</button>
        </div>
    )
}
export default Validate;