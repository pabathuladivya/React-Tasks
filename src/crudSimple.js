import React from "react";


class SimpleCrud extends React.Component{
    
    state = {
        employeeData : []
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let name = this.txtName.value;
        let age = this.txtAge.value;

        let newEmployee = {
            "name" : name,
            "age" : age,
        }
        employeeData.push(newEmployee)

        this.setState({
            employeeData : employeeData  
        })
    }

    render(){
        return(
            <div>
                <input type="text" ref="txtName" /><br/>
                <input type="text" ref="txtAge" /><br/>
                <button onClick={e => this.handleSubmit(e)}>Save</button>
            </div>
        )
    }
}
export default SimpleCrud;