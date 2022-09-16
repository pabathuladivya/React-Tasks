import React, { Component } from 'react';

class Form4 extends Component {

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

   
    }
    this.refs=React.createRef;
  } 

//   componentDidMount(){
//     this.refs.name.focus();
//   }

  fSubmit = (e) =>{
    e.preventDefault();
    // console.log('try');

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

    this.setState({
      indexs: 1,
      index: i
    });

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
        <h2>{this.state.title}</h2>
        <form ref="myForm"  onSubmit={this.handleSubmit} className="myForm">
          {/* <label>FirstName</label> */}
        FirstName:<input type="text" ref="FirstName" name="fname"  value={this.state.input.fname} placeholder="your name"  onChange={this.handleChange} className="formField" />
        <span  style={{color:'red' ,FontSize:30}} required>{this.state.errors.fname}  </span>
        LastName :<input type="text" ref="LastName" placeholder="your lname" className="formField" onChange={()=>this.validate()}  required/>
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
        <table border="2">
            <thead>
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
               <td>{data.msg}</td>
               <td></td>
               <td><button onClick={()=>this.fDelete(i)} className="myListButton">Delete </button></td>
               <td><button onClick={()=>this.fEdit(i)} className="myListButton">Edit </button></td>
               </tr>)}
            </thead>
        </table>
       
      </div>
    );
 }

}

export default Form4;