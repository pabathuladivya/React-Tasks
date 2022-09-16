import { message,Modal } from 'antd';
import React, { Component } from 'react';
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

class Address extends Component {

  constructor(props){
    super(props);
    this.state={
      // title: 'React Form',
      act: 0,
      index: '',
      datas: [],
      selection : [],
      status : "Active",
      modal: false,
      countries : [],
      states : [],
      cityes : [],
    }
    this.refs=React.createRef;
  } 

  componentDidMount(){
    this.setState(this.countries);
}
  
 handlecountry=(id)=>{
    const dt = this.states.filter(x=>x.countryId === id)
    this.setState(dt)
}

handleState=(id)=>{
    const dt=this.cityes.filter(c=>c.stateId===id)
    this.setState(dt)

}
  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let type = this.refs.type.value;
    let address = this.refs.address.value;
    let country = this.refs.country.value;
    let state = this.refs.state.value;
    let city = this.refs.city.value;
    let zipcode = this.refs.zipcode.value;

    if(this.state.act === 0){   //new
      let data = {
        type,address,country,state,city,zipcode,
      }
      datas.push(data);
      this.setState({ modal: false});
    }else{                      //update
      let index = this.state.index;
      datas[index].type = type;
      datas[index].address = address;
      datas[index].country = country;
      datas[index].state = state;
      datas[index].city = city;
      datas[index].zipcode = zipcode;
      
    }    this.setState({ modal: false}); 

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    // this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    this.setState({ modal: true});

    let data = this.state.datas[i];
    this.refs.type.value = data.type;
    this.refs.address.value = data.address;
    this.refs.country.value = data.country;
    this.refs.state.value = data.state;
    this.refs.city.value = data.city;
    this.refs.zipcode.value = data.zipcode;

    this.setState({
      act: 1,
      index: i
    });

    // this.refs.name.focus();
  }  

//   handleSelection = ({ dataItem }) => {
//     let _selection = [...this.state.selection];
//     const idx = _selection.indexOf(dataItem.id);
//     if (_selection) {
//         _selection = [];
//     }
//     if (idx > -1) {
//         _selection.splice(idx, 1);
//     } else {
//         _selection.push(dataItem.id);
//     }
//     this.setState({
//         ...this.state,
//         selection: _selection,
//         selectedObj: dataItem,
//         stateObj: dataItem,
//         errorMsg:null,
//         error:null
//     });
// };

// handleInputChange = (prop, e) => {
//   fStatus = (prop,e)=>{
//   const rowObj = prop.dataItem;
//   const value =
//     e.target.type === "checkbox" ? e.target.checked : e.target.value;
//   const name = e.target.name;
//   let { selection } = this.state;
//   let idx = selection.indexOf(rowObj.id);
//   if (selection) {
//     selection = [];
//   }
//   if (idx > -1) {
//     selection.splice(idx, 1);
//   } else {
//     selection.push(rowObj.id);
//   }
//   this.setState({
//     ...this.state,
//     [name]: value,
//     selection: selection,
//     selectedObj: { status: rowObj.status },
//     warningMsg: null
//   });
// };

// fStatus =()=>{
//    message.destroy();
// }
showModal = () => {
    this.setState({ modal: true});
};
  handleCancel = () => { 
    this.setState({ modal: false});

}

// handleOk = (i) => {   

//   this.setState({ modal: false});
// };

 countries=[
    {id:1,name:"INDIA"},
    {id:2,name:"USA"}
]
 states=[
    { id:"1",countryId:"1",name:"Hyderabad"},
    { id:"2",countryId:"1",name:"Delhi"},
    { id:"3",countryId:"2",name:"america"},
    { id:"4",countryId:"2",name:"aMD"},

]
 cityes=[
    { id:"1",stateId:"1",name:"Nirmal"},
    { id:"2",stateId:"1",name:"Adilabad"},
    { id:"3",stateId:"2",name:"amersca"},
    { id:"4",stateId:"2",name:"aMfsD"},
]
// const[country,setCountry]=useState([]);
// const[state,setState]=useState([]);
// const[city,setCity]=useState([]);

  render() {
    let datas = this.state.datas;
    return (
        <>
        <h3>Address Details</h3>
        <PlusCircleOutlined onClick={this.showModal} />
        <Modal visible={this.state.modal}

        onOk={(e)=>this.fSubmit(e)} onCancel={this.handleCancel}>
        
    
        {/* <h3>{this.state.title}</h3> */}
        <h2>Address Details</h2>
        <form ref="myForm" className="myForm">
        Type:<select type="text" ref="type" className="formField" >
            <option>Permanent Address</option>
            <option>Recedential Address</option></select><br/>
        Address:<input type="text" ref="address" className="formField" /><br/>
        {/* Country : <select type="text" ref="country"  className="formField">
            <option>India</option>
            <option>USA</option></select><br/> */}
           country : <select id="ddlCountry" ref="country" onChange={(e)=>this.handlecountry(e.target.value)} >
<option value="0">select Country</option>
{
    this.countries &&
   this. countries!==undefined?
   this. countries.map((ctr,index)=>{
        return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
        )
    })
    :"No Countrys"
} 
</select><br/>
        {/* state:<select type="text" ref="state"  className="formField" >
            <option>AP</option>
            <option>TS</option></select><br/> */}
           State : <select id="ddlStates" ref="state" onChange={(e)=>this.handleState(e.target.value)} >
<option value="0" >select State</option>
{
    this.states &&
    this.states!==undefined?
    this.states.map((ctr,index)=>{
        return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
        )
    })
    :"No States"
}
</select><br/>
        city:<input type="text" ref="city" className="formField" /><br/>
        zipcode:<input type="text" ref="zipcode" className="formField" /><br/>
        {/* <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button> */}
        </form>
        </Modal>
        <table border="2">
            <thead>
                <tr>
                    {/* <th><input type="checkbox"></input></th> */}
                    <th>Type</th>
                    <th>Address</th>
                    <th>zipcode</th>
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
                {datas.map((data, i) =>  <tr  key={i} >
                    {/* <td><input type="checkbox"></input></td> */}
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
               <td>{data.type}</td>
               <td>{data.address}</td>
               <td>{data.zipcode}</td>
               <td><DeleteOutlined onClick={()=>this.fRemove(i)} className="myListButton"/></td>
               <td><EditOutlined onClick={()=>this.fEdit(i)} className="myListButton"/></td>
               </tr>)}
            </thead>
        </table>
        
   
     
      </>
    );
  }
}

export default Address;