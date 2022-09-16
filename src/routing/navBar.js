import React from "react";
import {Link} from 'react-router-dom';

const Navbar =()=>{
    return(
        <div>
           {/* <ul>
              <Link to="/form"><li>Form</li></Link>
            <Link to="/address"><li>address</li></Link>
           <Link to="/qualification"><li>qualification</li></Link>
           <Link to="/tableRoute"><li>tableRoute</li></Link>
           <Link to="/formRoute"><li>formRoute</li></Link>
           </ul> */}
            <ul>
           
            <Link to="/about"><li>About screen1</li></Link>
            <Link to="/home"><li>Home</li></Link>
            {/* <Link to="/params/:id"><li>params screen4</li></Link> */}
            <Link to="/home/:id">button screen2</Link>&emsp;
            <Link to="nested">nested screen3</Link>&emsp;
            <Link to="/user/:id">paramsIdscreen4</Link>&emsp;
            <Link to="/hommie">useHistory</Link>
            {/* <Link to="/user/:id">button screen6</Link> */}
            {/* <Link to="/buttonProfile"><li>Profile</li></Link>
            <Link to="/orderd-summary"><li>About</li></Link> */}
          
           </ul>
        </div>
    )
}
export default Navbar;