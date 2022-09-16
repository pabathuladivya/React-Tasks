import React from "react";

const Fields =()=>{

    return(
        // <div className="row mb-3">
        //     <div class="form-group col-md-4">
        //         <label>First Name</label>
        //         <input type="text"/>
        //     </div>
        //     <div class="form-group col-md-4">
        //         <label>last Name</label>
        //         <input type="text"/>
        //     </div>
        // </div>
       
            <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
        </div>
        
    )
}
export default Fields;