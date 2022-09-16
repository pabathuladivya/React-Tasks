import React, { useState } from "react";


const Formm =()=>{

    const [data,setData] = useState({
        name : "",
        DOB : "",
        email : "",
        gender : "",
        Qualification : "",
        hobbies : "",
        Address : "",
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
        <>
        name : <input type="text" name="name" onChange={handleChange}/><br/>
        DOB : <input type="date" name="DOB" onChange={handleChange}/><br/>
        email : <input type="text" name="email" onChange={handleChange}/><br/>
        Gender : <input type="radio" name="gender" value="male" onChange={handleChange}/>Male
        <input type="radio" name="gender" value="female" onChange={handleChange}/>female<br/>
        Qualification : <select name="Qualification" onChange={handleChange}>
            <option>Degree</option>
            <option>Btech</option>
            <option>Diploma</option>
        </select><br/>
        hobbies : <input type="checkbox" name="hobbies" value="cricket" onChange={handleChange}/>cricket
        <input type="checkbox" name="hobbies" value="dance" onChange={handleChange}/>dance<br/>
        Address : <textarea name="Address" onChange={handleChange}/><br/>
        <button onClick={onSubmit}>submit</button>
        </>
    )
}
export default Formm;