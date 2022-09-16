import React, { useState } from "react";



const NormalAddress =()=>{

    const [type,setType] = useState();
    const [address,setAddress] = useState();
    const [country,setCountry] = useState();
    const [state,setState] = useState();
    const [city,setCity] = useState();
    const [code,setCode] = useState();

    const submit =(e)=>{
       console.log(type);
       console.log(address);
       console.log(country);
       console.log(state);
       console.log(city);
       console.log(code);
    }

    return(
        <>
        <form>
        type : <input type="text" label="name" value={type} onChange={(e)=>setType(e.target.value)}/>
        Address : <input type="text" label="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        Country : <input type="text" label="country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
        state : <input type="text" label="state" value={state} onChange={(e)=>setState(e.target.value)}/>
        city : <input type="text" label="city" value={city} onChange={(e)=>setCity(e.target.value)}/>
        zipcode : <input type="text" label="zipcode" value={code} onChange={(e)=>setCode(e.target.value)}/>
        <button onClick={()=>submit()}>submit</button>
        </form>
        </>
    )
}
export default NormalAddress;