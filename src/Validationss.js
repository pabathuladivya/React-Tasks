import React, { useState } from "react";


const Login =()=>{

    const [user,setUser] = useState("")
    const [userErr,setUserErr] = useState(false)
    const [password,setPassword] = useState("")
    const [passwordErr,setPasswordErr] = useState(false)

    function userHandler (e){
        let item = e.target.value;
        if(item.length<4){
            setUserErr(true)
        }else{
            setUserErr(false)
        }
        console.warn(e.target.value)
    }

    function passwordHandler (e){
        let item = e.target.value;
        if(item.length<4){
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        console.warn(e.target.value)
    }

    function loginHandler(e){
        if(user.length<4 || password.length<4){
            alert("invalid data")
        }else{
            alert("all good")
        }
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={loginHandler}>
                Name:<input type="text" onChange={userHandler}/>
                {userErr?<span>invalid data</span> : null}
                <br/>
            password:<input type="password" onChange={passwordHandler}/>
            {passwordErr?<span>invalid data</span> : null}
            <br/>
            <button>submit</button>
            </form>
        </div>
    )
}
export default Login;