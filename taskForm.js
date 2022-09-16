import React, { useState } from "react";


const TaskForm =()=>{

    const [data,setData] = useState({
        fname : "",
        lname : "",
        dob : "",
        designation : "",
        department : "",
        email : "",
        pno : "",
        country : "",
        state : "",
        city : "",
        gender : "",
        pcode : "",
    })

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
        // console.log(e.target.value)
    }
    const onSubmit =(e)=>{
        // debugger
        e.preventDefault();
        console.log(data);
    }

    return(
        <div>
           First Name:
            <input type="text" name="fname" onChange={handleChange}/>
            Last Name:
            <input type="text" name="lname" onChange={handleChange}/>
           
            DOB : <input type="date" name="dob" onChange={handleChange}/>
            Designation : <select type="text" name="designation" onChange={handleChange}>
                <option>UI</option>
                <option>Api</option></select>
                <br/><br/>
            Department : <select type="text" name="department" onChange={handleChange}>
                <option>developer</option>
                <option>tester</option></select>
            email : <input type="text" name="email" onChange={handleChange}/>
            phone number : <input type="text" name="pno" onChange={handleChange}/>
            Country : <select type="text" name="country" onChange={handleChange}>
                <option>India</option>
                <option>usa</option></select>
                <br/><br/>
            state : <select type="text" name="state" onChange={handleChange}>
                <option>AP</option>
                <option>TS</option></select>
            city : <input type="text" name="city" onChange={handleChange}/>
            gender : <input type="radio" name="gender" value="male" onChange={handleChange}/>male
            <input type="radio" name="gender" value="female" onChange={handleChange}/>female
            zipcode : <input type="text" name="pcode" onChange={handleChange}/><br/>
            <button onClick={onSubmit}>submit</button>
        </div>
    )
}
export default TaskForm;