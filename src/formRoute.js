import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';

class FormRoute extends Component {

    constructor(props){
      super(props);
      this.state={
        title: 'Form',
        indexs: 0,
        index: '',
        data: [],
        fields: {},
        errors: {},
        input: {},
        status : "Active",
        modal: false,
  
     
      }
      this.refs=React.createRef;
    } 
    // navigate = useNavigate();
    // history = useHistory();

    fSubmit = (e) =>{
        // debugger
        e.preventDefault();
        // console.log('try');
        this.history.push("/tableRoute")
        // this.navigate("/tableRoute");
    
        let store = this.state.data;
        let FirstName = this.refs.FirstName.value;
        let LastName = this.refs.LastName.value;
        let dOB = this.refs.dOB.value;
        let Phoneno = this.refs.Phoneno.value;
        let gender = this.refs.gender.value;
        let email = this.refs.email.value;
        let address = this.refs.address.value;
        let designation = this.refs.designation.value;
        let department = this.refs.department.value;
        let experience = this.refs.experience.value;
        let doj = this.refs.doj.value;
    
        if(this.state.indexs === 0){   //new
          let data = {
            FirstName,LastName,dOB,Phoneno,gender,email,address, designation,department,experience, doj,
          }
          store.push(data);
        }else{                      //update
          let index = this.state.index;
          store[index].FirstName = FirstName;
          store[index].LastName = LastName;
          store[index].dOB = dOB;
          store[index].gender = gender;
          store[index].Phoneno = Phoneno;
          store[index].email = email;
          store[index].address = address;
          store[index].designation = designation;
          store[index].department = department;
          store[index].experience = experience;
          store[index].doj = doj;
        }    
    
        this.setState({
          store: store,
          indexs: 0
        });
    
        this.refs.myForm.reset();
        // this.refs.name.focus();
    
    
       
    }



    render(){
        return(
            <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm"  onSubmit={this.handleSubmit} className="myForm">
          {/* <label>FirstName</label> */}
        FirstName:<input type="text" ref="FirstName" name="fname"  value={this.state.input.fname} placeholder="your name"  onChange={this.handleChange} className="formField" />
        <span  style={{color:'red' ,FontSize:30}} required>{this.state.errors.fname}  </span>
        LastName :<input type="text" ref="LastName" placeholder="your lname" className="formField"  required/>
        DOB : <input type="date" ref="dOB"  className="formField" required/>
        DOJ:<input type="date" ref="doj"  className="formField" required/><br/><br/>
        Desgination:<select type="text" ref="designation" placeholder="designation" className="formField" required>
          <option>-</option>
          <option>Front end</option>
          <option>Back end</option>
        </select>
        Department:<select type="text" ref="department" placeholder="your department" className="formField" >
          <option>-</option>
          <option>UI</option>
          <option>Api</option>
        </select>
        gender : <input type="radio" ref="gender" value="male" className="formField"/>male
            <input type="radio" ref="gender" value="female" className="formField"/>female <br/><br/>
        phone no:<input type="text" ref="Phoneno" name="phone" value={this.state.input.phone} placeholder="your phone no" className="formField"  required/>
        <span style={{color:'red' ,FontSize:30}}>{this.state.errors.phone}</span>
        Email:<input type="text" ref="email" name="email" value={this.state.input.email} placeholder="your email" onChange={this.handleChange} className="formField" required/> 
        <span style={{color:'red' ,FontSize:30}}>{this.state.errors.email}</span>
        Experience : <input type="text" ref="experience" placeholder="your experience" className="formField" required/>
        Address : <input type="text" ref="address" placeholder="your address" className="formField" required/>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton" required>submit </button>
          {/* <button onClick={(e)=>this.fEdit(e)} className="myListButton">edit </button> */}
        </form>
        </div>
        )
    }
}
export default FormRoute;