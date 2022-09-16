import React, { Component } from 'react';
import { Modal,Button } from 'antd';
import {EyeInvisibleOutlined} from '@ant-design/icons'


class TableRoute extends Component{
    constructor(props){
        super(props)
        this.state ={
            data: [],
        }
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
      
          this.props.refs.myForm.reset();
          // this.refs.name.focus();
        }
      
        fEdit = (i) => {
      
          // const { selection } = this.state;
      
          // if (selection.length != 1) {
      
          //     // this.warning("Please select the one record")
      
          //     this.setState({ ...this.state, warningMsg: 'Please select the one record' }
      
          //     );
      
          let store = this.state.data[i];
          this.props.refs.FirstName.value = store.FirstName;
          this.props.refs.LastName.value = store.LastName;
          this.props.refs.dOB.value = store.dOB;
          this.props.refs.doj.value = store.doj;
          this.props.refs.gender.value = store.gender;
          this.props.refs.Phoneno.value = store.Phoneno;
          this.props.refs.email.value = store.email;
          this.props.refs.designation.value = store.designation;
          this.props.refs.department.value = store.department;
          this.props.refs.experience.value = store.experience;
          this.props.refs.address.value = store.address;
      
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
       

    render(){
        let store = this.state.data;
        return(
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
            name="check"v
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
               <td><button onClick={()=>this.fDelete(i)} className="myListButton">Delete </button></td>
               <td><button onClick={()=>this.fEdit(i)} className="myListButton">Edit </button></td>
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
        </table>
       
        )
    }
}
export default TableRoute;