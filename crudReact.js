// import { message } from 'antd';
import React, { Component } from 'react';
import { Modal,Button } from 'antd';
import {EyeInvisibleOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons'

class Form3 extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Form',
      indexs: 0,
      index: '',
      data: [],
      fields: {},
      errors: false,
      input: {},
      status : "Active",
      modal: false,
      hide : false,
      FirstName : "",
      LastName : "",
      dOB : "",
      doj : "",
      Phoneno : "",
      gender : "",
      email : "",
      address : "",
      designation : "",
      department : "",
      experience :"",


   
    }
    this.refs=React.createRef;
  } 


//   componentDidMount(){
//     this.refs.name.focus();
//   }

  fSubmit = (e) =>{
    e.preventDefault();
    // console.log('try');

    if(this.state.FirstName.length==0 || this.state.LastName.length==0 || dOB.length==0 || Phoneno.length==0 || gender.length==0 || email.length==0 || address.length==0 || designation.length==0 || department.length == 0 || experience.length==0 || doj.length==0){
          this.setState({errors:true})
    }  

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

    this.setState({hide:true})

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


  //  this.setState({hide:true})
}
fDisable =()=>{
  if(this.state.status == "inActive"){
    this.setState({...this.state,status:"active"})
    this.setState({ modal: false });
  }else{
  this.setState({...this.state,status:"inActive"})
  this.setState({ modal: false });
  }
 
}
showModal = () => {
  this.setState({ modal: true });
};
handleCancel = () => {
  this.setState({ modal: false });
}



  fDelete = (i) => {
    let datas = this.state.data;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    // this.refs.name.focus();
  }

  fEdit = (i) => {
    this.setState({hide:false})

    // const { selection } = this.state;

    // if (selection.length != 1) {

    //     // this.warning("Please select the one record")

    //     this.setState({ ...this.state, warningMsg: 'Please select the one record' }

    //     );

    let store = this.state.data[i];
    this.refs.FirstName.value = store.FirstName;
    this.refs.LastName.value = store.LastName;
    this.refs.dOB.value = store.dOB;
    this.refs.doj.value = store.doj;
    this.refs.gender.value = store.gender;
    this.refs.Phoneno.value = store.Phoneno;
    this.refs.email.value = store.email;
    this.refs.designation.value = store.designation;
    this.refs.department.value = store.department;
    this.refs.experience.value = store.experience;
    this.refs.address.value = store.address;

    // this.setState({hide:true})
    // this.setState({hide:false})
    // this.form.setFieldvalues(this.value);
    this.myForm.setFieldsValue(this.store)

    this.setState({
      indexs: 1,
      index: i
    });

    this.setState({hide:true})
    
  } 
 
  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;

  

    this.setState({

      input

    });

  }

     

  handleSubmit(event) {

    event.preventDefault(); 

    if(this.validate()){

        console.log(this.state);  

        let input = {};

        input["fname"] = "";

        input["email"] = "";

        input["phone"] = "";

        // input["comment"] = "";

        this.setState({input:input});

  

        alert('Demo Form is submited');

    }

  }

  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;  

      if (!input["fname"]) {
        isValid = false;
        errors["fname"] = "Please enter your name.";
      }
      
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      } 

      if (typeof input["email"] !== "undefined") {         

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {

          isValid = false;

          errors["email"] = "Please enter valid email address.";

        }
      }  

      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }

      if (typeof input["phone"] !== "undefined") {         

        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phone"])) {
          isValid = false;
          errors["phone"] = "Please enter only number.";
        }else if(input["phone"].length != 10){
          isValid = false;
          errors["phone"] = "Please enter valid phone number.";
        }
      } 

      this.setState({
        errors: errors
      }); 

      return isValid;
  }


  render() {
    let store = this.state.data;
    return (
      
      <div className="App">
        {this.state.hide == false && <div>
        <h2>{this.state.title}</h2>
        <form ref="myForm"  onSubmit={this.handleSubmit} className="myForm">
          {/* <label>FirstName</label> */}
        FirstName:<input type="text" ref="FirstName" name="fname"  value={this.state.input.fname} placeholder="your name"  onChange={this.handleChange} className="formField" />
        {this.state.errors && this.state.FirstName.length<=0?
        <label >please enter name</label>:""}
        <span  style={{color:'red' ,FontSize:30}} required>{this.state.errors.fname} </span>
        LastName :<input type="text" ref="LastName" name="lname" placeholder="your lname" className="formField" required/>
        {this.state.errors && this.state.LastName.length<=0?
        <label >please enter name</label>:""}
        DOB : <input type="date" ref="dOB" name="dob" className="formField" required/>
        {this.state.errors && this.state.dOB.length<=0?
        <label >please enter dob</label>:""}
        DOJ:<input type="date" ref="doj" name="doj" className="formField" required/><br/><br/>
        {this.state.errors && this.state.doj.length<=0?
        <label >please enter doj</label>:""}
        Desgination:<select type="text" ref="designation" name="designation" placeholder="designation" className="formField" required>
          <option>-</option>
          <option>Front end</option>
          <option>Back end</option>
        </select>
        {this.state.errors && this.state.designation.length<=0?
        <label >please enter designation</label>:""}
        Department:<select type="text" ref="department" name="department" placeholder="your department" className="formField" >
          <option>-</option>
          <option>UI</option>
          <option>Api</option>
        </select>
        {this.state.errors && this.state.department.length<=0?
        <label >please enter department</label>:""}
        gender : <input type="radio" ref="gender" value="male" name="gender" className="formField"/>male
            <input type="radio" ref="gender" value="female" name="gender" className="formField"/>female <br/><br/>
            {this.state.errors && this.state.gender.length<=0?
        <label >please enter gender</label>:""}
        phone no:<input type="text" ref="Phoneno" name="phone" value={this.state.input.phone} placeholder="your phone no" className="formField"  required/>
        {this.state.errors && this.state.Phoneno.length<=0?
        <label >please enter phone no</label>:""}
        <span style={{color:'red' ,FontSize:30}}>{this.state.errors.phone}</span>
        Email:<input type="text" ref="email" name="email" value={this.state.input.email} placeholder="your email" onChange={this.handleChange} className="formField" required/> 
        {this.state.errors && this.state.email.length<=0?
        <label >please enter email</label>:""}
        <span style={{color:'red' ,FontSize:30}}>{this.state.errors.email}</span>
        Experience : <input type="text" ref="experience" name="experience" placeholder="your experience" className="formField" required/>
        {this.state.errors && this.state.experience.length<=0?
        <label >please enter experience</label>:""}
        Address : <input type="text" ref="address" name="address" placeholder="your address" className="formField" required/>
        {this.state.errors && this.state.address.length<=0?
        <label >please enter address</label>:""}
          <button onClick={(e)=>this.fSubmit(e)} className="myButton" required>submit </button>
          {/* <button onClick={(e)=>this.fEdit(e)} className="myListButton">edit </button> */}
        </form></div>}
       {this.state.hide == true &&<div>
        <table border="2">
            <thead>
            <i className="fa fa-ban"></i>
                <tr>
                    <th><input type="checkbox"  onChange={(e)=>this.fStatus(e)}/></th>
                    <th>Emp name</th>
                    <th>Desgination</th>
                    <th>Department</th>
                    <th>Date Of Joining</th>
                    <th>Status</th>
                </tr>
                {/* customCell: (props) => (
                <td>{" "}
    <label className="text-center custom-checkbox">
        <input
            id={props.dataItem.id}
            name="check"
            type="checkbox"
            checked={this.state.selection?.indexOf(props.dataItem.id) > -1}
            onChange={() => this.handleSelection(props)}
        />
        <span></span>{" "}
    </label>
</td>
), */}
                {store.map((data, i) =>  <tr  key={i} >
                    <td><input type="checkbox"></input></td>
                    {/* <td>customCell: (props) (
                <td>{" "}
    <label className="text-center custom-checkbox">
        <input
            id={this.props.dataItem.ref}
            name="check"
            type="checkbox"
            checked={this.state.selection?.indexOf(this.props.dataItem.id) > -1}
            onChange={() => this.handleSelection(this.props)}
        />
        <span></span>{" "}
    </label>
</td>
),</td> */}
               <td>{data.FirstName}</td>
               <td>{data.designation}</td>
               <td>{data.department}</td>
               <td>{data.doj}</td>
               <td>{this.state.status}</td>
               {this.status ==="active" ? this.state.active : this.state.inactive}
               {/* <td>{data.msg}</td> */}
               <td></td>
               <td><DeleteOutlined  onClick={()=>this.fDelete(i)} className="myListButton"/></td>
               <td><EditOutlined onClick={()=>this.fEdit(i)} className="myListButton"/> </td>
               <td><EyeInvisibleOutlined onClick={(e)=>this.showModal(e)} style={{color:'blue' ,FontSize:30}} /></td>
                  <Modal visible={this.state.modal} title={this.state.status == "Active" ? "confirm inactive" : "confirm active"}
                    footer={
                      <>
                        <Button
                          onClick={this.handleCancel}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={this.fDisable}
                        >
                          Ok
                        </Button>
                      </>
                    }></Modal>
               {/* <td><button onClick={()=>this.fDisable(i)} className="myListButton">fDisable </button></td> */}

               </tr>)}
            </thead>
        </table></div>}
       
      </div>
    );
 }

}

export default Form3;