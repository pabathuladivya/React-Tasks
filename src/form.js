import React, {useState} from "react";


const Sample = () =>{
    const [data,setData] = useState({
        Username : "",
        Password :"",
        Date :"",
        Gender : "",
    })
    // const {username,password} = data;
    const changeHandler = (e) => {
        // debugger
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return(
        <div>
          <form onSubmit={(e)=>submitHandler(e)}>
               Name: <input type="text" name="Username"  onChange={(e)=>changeHandler(e)}/><br/>
                Password:<input type="password" name="Password" onChange={(e)=>changeHandler(e)}/><br/>
                Date Of Birth: <input type="date" name="Date" onChange={(e)=>changeHandler(e)}/><br/>
                Gender : <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="submit" name="submit"/>
          {/* <button onClick={(e)=>submitHandler(e)}>submit</button> */}
          </form>
        </div>
    )
}

export default Sample;